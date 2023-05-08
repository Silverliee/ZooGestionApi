const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const zooSchema = new Schema({
    is_open: Boolean,
    in_night: Boolean
});

module.exports = mongoose.model('Zoo', zooSchema);