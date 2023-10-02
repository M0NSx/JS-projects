const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    nickname: String,
    email: String,
    password: String
})

const UsersModel = mongoose.model("user", UsersSchema)
module.exports = UsersModel
