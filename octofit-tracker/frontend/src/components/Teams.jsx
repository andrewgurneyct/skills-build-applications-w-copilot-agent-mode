import ResourceTable from './ResourceTable.jsx'
import { fetchCollection as fetch } from '../api.js'

const fetchPage = (pageUrl, signal) => fetch('/api/teams/', 'teams', pageUrl, signal)

const columns = [
  ['name', 'Team'], ['city', 'City'], ['motto', 'Motto'], ['members', 'Members'],
]

export default function Teams() {
  return <ResourceTable title="Teams" resource="teams" fetchPage={fetchPage} columns={columns} />
}