import express from 'express';
import db from './config/database';
import { Activity } from './models/Activity';
import { LeaderboardEntry } from './models/LeaderboardEntry';
import { Team } from './models/Team';
import { User } from './models/User';
import { Workout } from './models/Workout';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', database: db.readyState === 1 ? 'connected' : 'disconnected' });
});

app.get('/api/users/', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ username: 1 });
    response.json({ users });
  } catch (error) {
    next(error);
  }
});

app.get('/api/teams/', async (_request, response, next) => {
  try {
    const teams = await Team.find().sort({ name: 1 });
    response.json({ teams });
  } catch (error) {
    next(error);
  }
});

app.get('/api/activities/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ loggedAt: -1 });
    response.json({ activities });
  } catch (error) {
    next(error);
  }
});

app.get('/api/leaderboard/', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 });
    response.json({ leaderboard });
  } catch (error) {
    next(error);
  }
});

app.get('/api/workouts/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ title: 1 });
    response.json({ workouts });
  } catch (error) {
    next(error);
  }
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).json({ error: 'Internal server error' });
});

db.once('open', () => {
  app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit Tracker API listening at ${baseUrl}`);
  });
});