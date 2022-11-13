const mongoose = require("mongoose");
const { Schema } = mongoose;


const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cloudinaryId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    comments: {
        type: Array,
        default: []
    },
    timestamp: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model("Post", PostSchema);