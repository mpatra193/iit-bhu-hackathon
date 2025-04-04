import { LogIn, Router } from 'lucide-react'
import './App.css'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Studentdashboard from './pages/Studentdashboard'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <>
      <Studentdashboard  />
    </>
  )
}

export default App
