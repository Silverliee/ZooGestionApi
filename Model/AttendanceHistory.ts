import mongoose, {Model, Schema} from "mongoose";

const attendanceHistorySchema = new Schema<AttendanceHistory>({
    spaceId: String,
    date: String,
});

export interface AttendanceHistory {
    spaceId: string,
    date: string,
}

export const AttendanceHistoryModel: Model<AttendanceHistory> = mongoose.model("AttendanceHistory", attendanceHistorySchema);
