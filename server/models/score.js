const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    correct:{
        type: Number
    },
    total:{
        type:Number
    },
    topic:{
        type:String
    },
    date:{
        type:Date
    }
})

exports.Score = mongoose.model("Score",scoreSchema);