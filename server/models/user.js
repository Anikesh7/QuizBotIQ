const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image:{
        imageName:{
            type: String,
            default: "noimage"
        },
        imageUrl:{
            type: String,
            default: ""
        }
    },
    scores: [{
        correct:{
            type: String,
            default: ""
        },
        total:{
            type: String,
            default: ""
        },
        topic:{
            type: String,
            default: ""
        },
        date:{
            type:String
        }
    }]
},{timestamps: true});

exports.User = mongoose.model("User",userSchema); 