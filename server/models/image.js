const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    imageName:{
        type: String,
    },
    imageUrl:{
        type: String,
        default: ''
    }
});

exports.Image = mongoose.model("Image", imageSchema);