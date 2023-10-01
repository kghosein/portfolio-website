import './styles/main.scss'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Resume from './pages/Resume'
import HireMe from './pages/HireMe'
import { useColorThemeContext } from './hooks/useColorThemeContext'

function App() {
  const { colorTheme } = useColorThemeContext()

  return (
    <div className={colorTheme === "light" ?
      "outer-container theme__light"
      :
      "outer-container theme__dark"}
    >
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/hire-me" element={<HireMe />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
