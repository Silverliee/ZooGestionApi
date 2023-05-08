const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const {maintenanceHistorySchema} = require("./MaintenanceHistory");

const spaceSchema = new Schema({
    name: String,
    description: String,
    images: {type: String, required: false},
    type: Number,
    capacity: Number,
    opening_time: String,
    handicap_access: Boolean,
    on_maintain: Boolean,
    animals: {type: [String], default: undefined},
    maintenanceHistory: {type: [maintenanceHistorySchema], required: false},
});

module.exports = mongoose.model('Space', spaceSchema);