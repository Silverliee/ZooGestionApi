const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const passSchema = new Schema({
    type: Number,
    price: Number,
    is_valid: Boolean,
    last_utilization: {type: String, required: false},
    authorizedSpaces: [String],
});

const passModel = mongoose.model('Pass', passSchema);

module.exports = {
    passSchema,
    passModel
};