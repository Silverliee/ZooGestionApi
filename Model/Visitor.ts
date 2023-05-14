import mongoose, {Model, Schema} from "mongoose";
const {passSchemaExport} = require('../Model/Pass');

const visitorSchema = new Schema<Visitor>({
    name: String,
    actualLocation: {type: String, required: false},
    pass: passSchemaExport,
});

export interface Visitor {
    name: string,
    actualLocation: string,
    pass: object,
}

export const VisitorModel: Model<Visitor> = mongoose.model("Visitor", visitorSchema);