const _ = require("lodash");
const {Path} = require("path-parser")
const {URL} = require("url")

const serverPath = require("./serverRoutes")
const mongoose = require("mongoose")
const requireLogin = require("../middlewares/requireLogin")
const requireCredits = require("../middlewares/requireCredits")
const Mailer = require("../services/Mailer")
const surveyTemplate = require("../services/emailTemplates/surveyTemplate")

const Survey = mongoose.model("surveys")

module.exports = app => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({_user: req.user.id}).select({recipients: false});
    res.send(surveys);
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    const events = _.map(req.body, (event) =>{
      const pathname = new URL(event.url).pathname;
      const match = p.test(pathname);
      if (match) {
        return {email: event.email, surveyId: match.surveyId, choice: match.choice};
      }
    });
    // console.log(events);

    const compactEvents = _.compact(events);
    const uniqueEvents = _.uniqBy(compactEvents, "email", "surveyId");
    _.each(uniqueEvents, event => {
      // this is async 
      console.log(event);
      Survey.updateOne({
        _id: event.surveyId,
        recipients: {
          $elemMatch: {email: event.email, responded: false}
        }
      }, {
        $inc: {[event.choice]: 1}, // add 1
        $set: {"recipients.$.responded": true},
        lastResponded: new Date()
      }).exec();
    })

    // console.log("unique", uniqueEvents);
    res.send({})
  })

  app.get('/api/surveys/:surveyId/delete', requireLogin, (req, res) => {
    // console.log(req.params.surveyId)
    Survey.findByIdAndDelete(req.params.surveyId, (err) => {
      if(err){
        console.log(err)
      }
    })
    res.send({})
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send("<div>Thank you!<div>")
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
      const { title, subject, body, recipients } = req.body;
      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(',').map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
      });
  
      // Great place to send an email!
      const mailer = new Mailer(survey, surveyTemplate(survey));
      try {
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user)
        console.log("here")
      } catch (err) {
        res.status(422).send(err);
        console.log(err)
      }
  });
}