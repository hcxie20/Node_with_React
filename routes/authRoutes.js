const passport = require("passport")
const serverPath = require("./serverRoutes")

module.exports = function(app) {
    app.get("/auth/google", passport.authenticate("google", 
    {
        scope: ["profile", "email"]
    }) 
    )

    app.get("/api/current_user", (req, res) => {
        // console.log(req.user)
        res.send(req.user)
    })

    app.get("/api/logout", (req, res) => {
        req.logout()
        res.redirect(serverPath() + "/")
    })

    app.get("/auth/google/callback", passport.authenticate("google"), 
    (req, res) => {
        res.redirect(serverPath() + "/surveys")
    }
    )

}
