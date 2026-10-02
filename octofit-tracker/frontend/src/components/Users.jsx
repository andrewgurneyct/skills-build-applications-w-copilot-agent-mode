import ResourceTable from './ResourceTable.jsx'

const columns = [
  ['username', 'Username'], ['fullName', 'Name'], ['email', 'Email'],
  ['fitnessGoal', 'Fitness goal'], ['memberSince', 'Member since'],
]

export default function Users() {
  return <ResourceTable title="Users" resource="users" endpoint="/api/users/" columns={columns} />
}