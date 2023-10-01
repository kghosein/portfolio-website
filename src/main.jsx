import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ColorThemeContextProvider } from './context/ColorThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorThemeContextProvider>
      <Router>
        <App />
      </Router>
    </ColorThemeContextProvider>
  </React.StrictMode>,
)
