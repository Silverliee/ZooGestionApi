const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const {treatmentSchema} = require("./Treatment");

const animalSchema = new Schema({
    name: String,
    treatments: {type: [treatmentSchema], default: undefined}
});

module.exports = mongoose.model('Animal', animalSchema);