const express = require("express")
const mongoose = require("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const keys = require("./config/keys")
const authRouthes = require("./routes/authRoutes")
require("./models/User")
require("./services/passport")


const app = express()
// ===================== app configure =====================


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())

// ===================== mongoose configure =====================
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(keys.mongoURI)

authRouthes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)