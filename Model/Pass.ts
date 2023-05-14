import mongoose, {Model, Schema} from "mongoose";

const passSchema = new Schema<Pass>({
    type: Number,
    price: Number,
    is_valid: Boolean,
    last_utilization: {type: String, required: false},
    authorizedSpaces: [String],
});

export interface Pass {
    type: number,
    price: number,
    is_valid: boolean,
    last_utilization: string,
    authorizedSpaces: string[]
}

export const PassModel: Model<Pass> = mongoose.model("Pass", passSchema);
export const passSchemaExport = passSchema;