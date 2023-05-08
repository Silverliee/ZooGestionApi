const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const treatmentSchema = new Schema({
    veterinary: String,
    treatment: String,
    date: String,
});

const treatmentModel = mongoose.model('Treatment', treatmentSchema);

module.exports = {
    treatmentSchema,
    treatmentModel
};