const mongoose = require('mongoose')
const { Schema } = mongoose

const CommentSchema = Schema({
    userName: {
        type: String,
        required: true,
        maxlength: 30
    },
    content: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
})