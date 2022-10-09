import { Routes, Route } from 'react-router-dom'

import Home from './components/screens/home/Home'
import Admin from './components/screens/admin/Admin';

import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  )
}

export default App
