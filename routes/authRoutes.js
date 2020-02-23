const passport = require("passport")

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
        res.send(req.user)
    })

    app.get("/auth/google/callback", passport.authenticate("google", {failureRedirect: "/auth/google"}), 
    function(req, res) {
        res.send("Loged in")
    })

}
