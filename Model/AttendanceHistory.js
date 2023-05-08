const mongoose = require('mongoose');

const attendanceHistorySchema = mongoose.Schema({
    spaceId: String,
    date: String,
});

module.exports = mongoose.model('AttendanceHistory', attendanceHistorySchema);