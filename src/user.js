const mongoose = require('mongoose');

const { Schema } = mongoose;
const ActivitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    activity:{
        type: String,
        required: true,
    },
    nb:{
        type: Number,
        required: true,
    },
    activitydate:{
        type: Date,
        required: true,
    },
    phonenumber:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('User', ActivitySchema);