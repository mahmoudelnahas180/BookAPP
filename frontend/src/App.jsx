
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route, useLocation } from 'react-router-dom'
function App() {
  const location = useLocation()
  const hideHeaderRoutes = ["/login", "/signup"]
  const hideHeader = hideHeaderRoutes.includes(location.pathname)

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
