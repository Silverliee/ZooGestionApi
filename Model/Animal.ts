import mongoose, {Model, Schema} from "mongoose";
const {treatmentSchema} = require("./Treatment");

const animalSchema = new Schema<Animal>({
    name: String,
    treatments: {type: [treatmentSchema], default: undefined}
});

export interface Animal {
    name: string,
    treatments: object[],
}

export const AnimalModel: Model<Animal> = mongoose.model("Animal", animalSchema);