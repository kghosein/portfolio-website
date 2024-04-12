import SunIcon from "./svgs/SunIcon"
import MoonIcon from "./svgs/MoonIcon"
import { useEffect, useReducer } from "react"
import { useColorThemeContext } from "../hooks/useColorThemeContext"
import { useWindowSize } from "@react-hookz/web"

function reducer(state, action) {
  switch (action.type) {
    case "DARK":
      return { themeMode: "dark" }
    case "LIGHT":
      return { themeMode: "light" }
    default:
      return state
  }
}

const Button = ({ mode, icon, dispatchMode }) => (
  <button type="button" onClick={() => dispatchMode({ type: mode })}>
    {icon}
  </button>
)

const ToggleMode = () => {
  const { dispatch } = useColorThemeContext()
  const [state, dispatchMode] = useReducer(reducer, {
    themeMode: JSON.parse(localStorage.getItem("color_theme"))
      ? JSON.parse(localStorage.getItem("color_theme"))
      : "dark",
  })
  const { width: windowWidth } = useWindowSize()

  const handleMode = () => {
    localStorage.setItem("color_theme", JSON.stringify(state?.themeMode))
    dispatch({
      type: "COLOR_THEME",
      payload: {
        colorTheme: state?.themeMode,
      },
    })
  }

  useEffect(() => {
    handleMode()
  }, [state])

  return (
    <div className="toggle-mode-buttons" data-mode={state?.themeMode}>
      {state?.themeMode === "light" ? (
        <Button
          mode={"DARK"}
          icon={
            windowWidth <= 767 ? (
              <MoonIcon width={48} height={48} />
            ) : (
              <MoonIcon />
            )
          }
          dispatchMode={dispatchMode}
        />
      ) : (
        <Button
          mode={"LIGHT"}
          icon={
            windowWidth <= 767 ? (
              <SunIcon width={48} height={48} />
            ) : (
              <SunIcon />
            )
          }
          dispatchMode={dispatchMode}
        />
      )}
    </div>
  )
}

export default ToggleMode
