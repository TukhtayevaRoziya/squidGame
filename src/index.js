import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { ModalProvider } from './components/ModalProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ModalProvider>
      <Router>
        <App />
      </Router>
    </ModalProvider>
  </React.StrictMode>,
)

reportWebVitals()
