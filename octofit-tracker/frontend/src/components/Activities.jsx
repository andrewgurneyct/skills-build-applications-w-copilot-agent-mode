import ResourceTable from './ResourceTable.jsx'
import { fetchCollection as fetch } from '../api.js'

const fetchPage = (pageUrl, signal) => fetch('/api/activities/', 'activities', pageUrl, signal)

const columns = [
  ['username', 'User'], ['team', 'Team'], ['type', 'Activity'],
  ['durationMinutes', 'Minutes'], ['caloriesBurned', 'Calories'], ['loggedAt', 'Logged at'],
]

export default function Activities() {
  return <ResourceTable title="Activities" resource="activities" fetchPage={fetchPage} columns={columns} />
}