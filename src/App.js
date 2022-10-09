import { Routes, Route } from 'react-router-dom'

import Home from './components/screens/home/Home'
import Admin from './components/screens/admin/Admin';

import './App.css'

function App() {
  return (
    <div className={'gradient'}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
