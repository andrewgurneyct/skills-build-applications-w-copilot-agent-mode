import mongoose, { Schema } from 'mongoose';

const activitySchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    team: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    loggedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Activity = mongoose.model('Activity', activitySchema);