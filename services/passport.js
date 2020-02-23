const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require("mongoose")
const keys = require("../config/keys")
const urls = require("../config/urls")

const User = mongoose.model("users")

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    })
})

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: urls.googleRedirect + "/auth/google/callback"
    },
    async function(accessToken, refreshToken, profile, done)
    {
        // console.log("AT: ", accessToken)
        // console.log("RT: ", refreshToken)
        // console.log("Profile: ", profile)
        const existingUser = await User.findOne({googleID: profile.id})
        if(existingUser){
            console.log("User Found")
            done(null, existingUser)
        } else {
            console.log("New user")
            const user = await new User({
                googleID: profile.id
            }).save()
            user => done(null, user)
        }    
    })
)