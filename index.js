const express = require("express")
const mongoose = require("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const keys = require("./config/keys")
const bodyParser = require("body-parser")

require("./models/User")
require("./models/Survey")
require("./services/passport")

const authRouthes = require("./routes/authRoutes")
const billingRoutes = require("./routes/billingRoutes")
const surveyRoutes = require("./routes/surveyRoutes")
const signinRoutes = require("./routes/signinRoutes")

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

// ===================== Routes configure =====================
authRouthes(app)
billingRoutes(app)
surveyRoutes(app)
signinRoutes(app)
// ===================== Routes configure =====================
console.log(process.env.NODE_ENV)

// ===================== ? =====================
if (process.env.NODE_ENV === "Production") {
    console.log("Production mode")
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    })
}

// ===================== Listening =====================
const PORT = process.env.PORT || 5000
app.listen(PORT)