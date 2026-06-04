const mongoose = require("mongoose")
const {MONGO_URL} =  require("./config")

mongoose.connect(MONGO_URL);

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const AccountSchema = mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    balance: Number
})

const userModel = mongoose.model("users", UserSchema)
const accountModel = mongoose.model("accounts", AccountSchema)

module.exports = {
    userModel, accountModel
}