import { LogIn, Router } from 'lucide-react'
import './App.css'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Studentdashboard from './pages/Studentdashboard'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
<<<<<<< HEAD
    <>
      <Studentdashboard />
    </>
=======
    <div>
        <Router>
          <Landing path="/" />
          <Login path="/login" />
          <Signup path="/signup" />
          <Studentdashboard path="/student-dashboard" />
        </Router>
    </div>
>>>>>>> 133e4e861c6ca08f2f010ffd1af510abac363f5f
  )
}

export default App
