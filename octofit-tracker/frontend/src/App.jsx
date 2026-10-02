import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const views = [
  ['activities', 'Activities', Activities],
  ['leaderboard', 'Leaderboard', Leaderboard],
  ['teams', 'Teams', Teams],
  ['users', 'Users', Users],
  ['workouts', 'Workouts', Workouts],
]

function App() {
  return (
    <>
      <header className="app-header">
        <div className="container py-3">
          <NavLink to="/activities" className="app-brand">
            <img src={logo} width="48" height="48" alt="" />
            <span>OctoFit Tracker</span>
          </NavLink>
          <nav className="nav app-nav mt-3" aria-label="Main navigation">
            {views.map(([path, title]) => (
              <NavLink key={path} to={`/${path}`} className="nav-link">{title}</NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Navigate to="/activities" replace />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </main>
    </>
  )
}

export default App
