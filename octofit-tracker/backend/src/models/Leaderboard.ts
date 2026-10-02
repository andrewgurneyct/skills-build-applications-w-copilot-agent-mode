import mongoose, { Schema } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    team: { type: String, required: true, trim: true },
    totalPoints: { type: Number, required: true, min: 0 },
    weeklyActivities: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

export const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);