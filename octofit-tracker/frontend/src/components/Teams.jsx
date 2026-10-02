import ResourceTable from './ResourceTable.jsx'

const columns = [
  ['name', 'Team'], ['city', 'City'], ['motto', 'Motto'], ['members', 'Members'],
]

export default function Teams() {
  return <ResourceTable title="Teams" resource="teams" endpoint="/api/teams/" columns={columns} />
}