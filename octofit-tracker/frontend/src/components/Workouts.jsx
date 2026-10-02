import ResourceTable from './ResourceTable.jsx'
import { fetchCollection as fetch } from '../api.js'

const fetchPage = (pageUrl, signal) => fetch('/api/workouts/', 'workouts', pageUrl, signal)

const columns = [
  ['title', 'Workout'], ['focusArea', 'Focus area'], ['difficulty', 'Difficulty'],
  ['durationMinutes', 'Minutes'], ['exercises', 'Exercises'],
]

export default function Workouts() {
  return <ResourceTable title="Workouts" resource="workouts" fetchPage={fetchPage} columns={columns} />
}