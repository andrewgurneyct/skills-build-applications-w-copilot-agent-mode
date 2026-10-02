import ResourceTable from './ResourceTable.jsx'

const columns = [
  ['title', 'Workout'], ['focusArea', 'Focus area'], ['difficulty', 'Difficulty'],
  ['durationMinutes', 'Minutes'], ['exercises', 'Exercises'],
]

export default function Workouts() {
  return <ResourceTable title="Workouts" resource="workouts" endpoint="/api/workouts/" columns={columns} />
}