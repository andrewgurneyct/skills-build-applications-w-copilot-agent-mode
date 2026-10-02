import mongoose, { Schema } from 'mongoose';

const leaderboardEntrySchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    team: { type: String, required: true, trim: true },
    totalPoints: { type: Number, required: true, min: 0 },
    weeklyActivities: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

export const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardEntrySchema);