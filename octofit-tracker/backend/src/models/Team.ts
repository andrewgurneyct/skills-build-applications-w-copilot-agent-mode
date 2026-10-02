import mongoose, { Schema } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    city: { type: String, required: true, trim: true },
    motto: { type: String, required: true, trim: true },
    members: [{ type: String, required: true, trim: true }],
  },
  { timestamps: true },
);

export const Team = mongoose.model('Team', teamSchema);