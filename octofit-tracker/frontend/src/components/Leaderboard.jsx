import ResourceTable from './ResourceTable.jsx'

const columns = [
  ['rank', 'Rank'], ['username', 'User'], ['team', 'Team'],
  ['totalPoints', 'Points'], ['weeklyActivities', 'Weekly activities'],
]

export default function Leaderboard() {
  return <ResourceTable title="Leaderboard" resource="leaderboard" endpoint="/api/leaderboard/" columns={columns} />
}