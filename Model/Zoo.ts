import mongoose, {Model, Schema} from "mongoose";

const zooSchema = new Schema<Zoo>({
    is_open: Boolean,
    in_night: Boolean
});

export interface Zoo {
    is_open: boolean,
    in_night: boolean
}

export const ZooModel: Model<Zoo> = mongoose.model("Zoo", zooSchema);