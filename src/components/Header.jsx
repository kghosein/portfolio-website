import ToggleMode from "./ToggleMode"
import Nav from "./Nav"
import { useWindowSize } from "@react-hookz/web"
import data from "../data/data.json"

const Header = () => {
  const { width: windowWidth } = useWindowSize()

  return (
    <div className="header-container">
      <div className="inner-container">
        <header className="header">
          <div className="header__header-wrapper">
            <h1 className="header__title">
              {windowWidth <= 767
                ? data?.header?.titleMbl
                : data?.header?.title}
            </h1>
            {windowWidth > 767 && <ToggleMode />}
          </div>
          <Nav />
        </header>
      </div>
    </div>
  )
}

export default Header
