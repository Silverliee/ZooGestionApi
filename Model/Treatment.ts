import mongoose, {Model, Schema} from "mongoose";

const treatmentSchema = new Schema<Treatment>({
    veterinary: String,
    treatment: String,
    date: String,
});

export interface Treatment {
    veterinary: string,
    treatment: string,
    date: string,
}

export const TreatmentModel: Model<Treatment> = mongoose.model("Treatment", treatmentSchema);
export {treatmentSchema};