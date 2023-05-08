const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const employeeSchema = mongoose.Schema({
    name: String,
    is_admin: Boolean,
    role: Number,
    email: {type: String, required: true, unique: true},
    password: String,
    is_working: Boolean,
});

employeeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Employee', employeeSchema);