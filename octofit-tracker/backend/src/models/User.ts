import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    fitnessGoal: { type: String, required: true, trim: true },
    memberSince: { type: Date, required: true },
  },
  { timestamps: true },
);

export const User = mongoose.model('User', userSchema);