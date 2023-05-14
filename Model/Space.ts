import mongoose, {Model, Schema} from "mongoose";
const {maintenanceHistorySchemaExport} = require("./MaintenanceHistory");

const spaceSchema = new Schema<Space>({
    name: String,
    description: String,
    images: {type: String, required: false},
    type: Number,
    capacity: Number,
    opening_time: String,
    handicap_access: Boolean,
    on_maintain: Boolean,
    animals: {type: [String], default: undefined},
    maintenanceHistory: {type: [maintenanceHistorySchemaExport], required: false},
});

export interface Space {
    name: string,
    description: string,
    images: string,
    type: number,
    capacity: number,
    opening_time: string,
    handicap_access: boolean,
    on_maintain: boolean,
    animals: string[],
    maintenanceHistory: object[],
}

export const SpaceModel: Model<Space> = mongoose.model("Space", spaceSchema);