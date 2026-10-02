import ResourceTable from './ResourceTable.jsx'

const columns = [
  ['username', 'User'], ['team', 'Team'], ['type', 'Activity'],
  ['durationMinutes', 'Minutes'], ['caloriesBurned', 'Calories'], ['loggedAt', 'Logged at'],
]

export default function Activities() {
  return <ResourceTable title="Activities" resource="activities" endpoint="/api/activities/" columns={columns} />
}