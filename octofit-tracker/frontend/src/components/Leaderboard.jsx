import ResourceTable from './ResourceTable.jsx'
import { fetchCollection as fetch } from '../api.js'

const fetchPage = (pageUrl, signal) => fetch('/api/leaderboard/', 'leaderboard', pageUrl, signal)

const columns = [
  ['rank', 'Rank'], ['username', 'User'], ['team', 'Team'],
  ['totalPoints', 'Points'], ['weeklyActivities', 'Weekly activities'],
]

export default function Leaderboard() {
  return <ResourceTable title="Leaderboard" resource="leaderboard" fetchPage={fetchPage} columns={columns} />
}