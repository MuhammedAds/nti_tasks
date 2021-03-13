const {Schema, model, Types} = require('mongoose')

const articleSchema = Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    publisher: {
        id: {
            type: Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Article = model('article', articleSchema);

module.exports = {Article}