import { LogIn, Router } from 'lucide-react'
import './App.css'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <>
    
    <AuthProvider>
    <Router>
    <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signin" element={<Signup/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/changePassword" element={<ChangePassword />} />
                    <Route
                        path="/dashboard/*"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                </Routes>
    </Router>
    </AuthProvider>
    </>
  )
}

export default App
