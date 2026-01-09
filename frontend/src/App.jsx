
import './App.css'
import Header from './component/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
