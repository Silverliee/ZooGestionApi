const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const maintenanceHistorySchema = new Schema({
    employee: String,
    date: String
});

const maintenanceHistoryModel = mongoose.model('MaintenanceHistory', maintenanceHistorySchema);

module.exports = {
    maintenanceHistorySchema: maintenanceHistorySchema,
    maintenanceHistoryModel
};