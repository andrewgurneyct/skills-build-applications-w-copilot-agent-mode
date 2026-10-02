import ResourceTable from './ResourceTable.jsx'
import { fetchCollection as fetch } from '../api.js'

const fetchPage = (pageUrl, signal) => fetch('/api/users/', 'users', pageUrl, signal)

const columns = [
  ['username', 'Username'], ['fullName', 'Name'], ['email', 'Email'],
  ['fitnessGoal', 'Fitness goal'], ['memberSince', 'Member since'],
]

export default function Users() {
  return <ResourceTable title="Users" resource="users" fetchPage={fetchPage} columns={columns} />
}