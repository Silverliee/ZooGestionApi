import mongoose, {Model, Schema} from "mongoose";
const uniqueValidator = require('mongoose-unique-validator');

const employeeSchema = new Schema<Employee>({
    name: String,
    is_admin: Boolean,
    role: Number,
    email: {type: String, required: true, unique: true},
    password: String,
    is_working: Boolean,
});

employeeSchema.plugin(uniqueValidator);

export interface Employee {
    name: string,
    is_admin: boolean,
    role: number,
    email: string,
    password: string,
    is_working: boolean,
}

export const EmployeeModel: Model<Employee> = mongoose.model("Employee", employeeSchema);