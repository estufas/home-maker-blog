const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 4
    },
    body:{
        type: String,
        required: true,
        min: 100
    }
});

const PostModel = model('Post', PostSchema)

module.exports = PostModel;