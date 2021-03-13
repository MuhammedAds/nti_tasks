const mongoose = require('mongoose')
const { token } = require('morgan')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    token:String,
    address: String
})

const User = mongoose.model('user', userSchema)

module.exports = { User }