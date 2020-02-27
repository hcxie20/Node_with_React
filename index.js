const express = require("express")
const mongoose = require("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const keys = require("./config/keys")
const bodyParser = require("body-parser")
const authRouthes = require("./routes/authRoutes")
const billingRoutes = require("./routes/billingRoutes")
require("./models/User")
require("./services/passport")


const app = express()
// ===================== app configure =====================

app.use(bodyParser.json())
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
billingRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)