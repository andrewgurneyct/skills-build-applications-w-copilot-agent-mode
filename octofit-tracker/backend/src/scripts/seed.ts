import mongoose from 'mongoose';
import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      {
        username: 'maya-runner',
        fullName: 'Maya Thompson',
        email: 'maya.thompson@example.com',
        fitnessGoal: 'Train for a spring half marathon',
        memberSince: new Date('2025-01-12'),
      },
      {
        username: 'liam-lifts',
        fullName: 'Liam Chen',
        email: 'liam.chen@example.com',
        fitnessGoal: 'Build full-body strength',
        memberSince: new Date('2025-02-03'),
      },
      {
        username: 'sofia-cycles',
        fullName: 'Sofia Alvarez',
        email: 'sofia.alvarez@example.com',
        fitnessGoal: 'Improve cycling endurance',
        memberSince: new Date('2025-03-19'),
      },
    ]);

    await Team.insertMany([
      {
        name: 'Cardio Crew',
        city: 'Seattle',
        motto: 'Miles before meetings',
        members: ['maya-runner', 'sofia-cycles'],
      },
      {
        name: 'Strength Squad',
        city: 'Austin',
        motto: 'Stronger every session',
        members: ['liam-lifts'],
      },
    ]);

    await Activity.insertMany([
      {
        username: 'maya-runner',
        team: 'Cardio Crew',
        type: 'Run',
        durationMinutes: 48,
        caloriesBurned: 430,
        loggedAt: new Date('2026-09-27T07:30:00Z'),
      },
      {
        username: 'liam-lifts',
        team: 'Strength Squad',
        type: 'Strength Training',
        durationMinutes: 55,
        caloriesBurned: 360,
        loggedAt: new Date('2026-09-28T18:15:00Z'),
      },
      {
        username: 'sofia-cycles',
        team: 'Cardio Crew',
        type: 'Cycling',
        durationMinutes: 72,
        caloriesBurned: 610,
        loggedAt: new Date('2026-09-29T06:45:00Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        username: 'sofia-cycles',
        team: 'Cardio Crew',
        totalPoints: 1420,
        weeklyActivities: 5,
        rank: 1,
      },
      {
        username: 'maya-runner',
        team: 'Cardio Crew',
        totalPoints: 1275,
        weeklyActivities: 4,
        rank: 2,
      },
      {
        username: 'liam-lifts',
        team: 'Strength Squad',
        totalPoints: 1180,
        weeklyActivities: 4,
        rank: 3,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Morning 5K Builder',
        focusArea: 'Cardio endurance',
        difficulty: 'Beginner',
        durationMinutes: 35,
        exercises: ['Dynamic warmup', 'Run-walk intervals', 'Cooldown walk', 'Calf stretch'],
      },
      {
        title: 'Power Foundation',
        focusArea: 'Strength',
        difficulty: 'Intermediate',
        durationMinutes: 50,
        exercises: ['Goblet squats', 'Dumbbell rows', 'Push-ups', 'Farmer carries'],
      },
      {
        title: 'Climb Ready Ride',
        focusArea: 'Cycling power',
        difficulty: 'Advanced',
        durationMinutes: 60,
        exercises: ['Spin warmup', 'Hill repeats', 'Tempo ride', 'Hip mobility'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
