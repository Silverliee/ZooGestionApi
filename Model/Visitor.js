const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const {passSchema} = require('./Pass');

const visitorSchema = new Schema({
    name: String,
    actualLocation: {type: String, required: false},
    pass: passSchema,
});

module.exports = mongoose.model('Visitor', visitorSchema);