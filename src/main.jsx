import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter as Router } from "react-router-dom"
import { ColorThemeContextProvider } from "./context/ColorThemeContext"
import { HelmetProvider } from "react-helmet-async"

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <ColorThemeContextProvider>
        <Router>
          <App />
        </Router>
      </ColorThemeContextProvider>
    </React.StrictMode>
  </HelmetProvider>
)
