import mongoose, {Model, Schema} from "mongoose";

const maintenanceHistorySchema = new Schema<MaintenanceHistory>({
    employee: String,
    date: String
});

export interface MaintenanceHistory {
    employee: string,
    date: string,
}

export const MaintenanceHistoryModel: Model<MaintenanceHistory> = mongoose.model("MaintenanceHistory", maintenanceHistorySchema);
export const maintenanceHistorySchemaExport = maintenanceHistorySchema;