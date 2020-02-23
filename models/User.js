const mongoose = require("mongoose")
const {Schema} = mongoose

userSchema = new Schema ({
    googleID: String
})

mongoose.model("users", userSchema)