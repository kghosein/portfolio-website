import SunIcon from "./svgs/SunIcon"
import MoonIcon from "./svgs/MoonIcon"
import { useEffect, useReducer } from "react"
import { useColorThemeContext } from "../hooks/useColorThemeContext"

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

const ToggleMode = () => {
  const { dispatch } = useColorThemeContext()
  const [state, dispatchMode] = useReducer(reducer, {
    themeMode: JSON.parse(localStorage.getItem("color_theme")) ?
      JSON.parse(localStorage.getItem("color_theme"))
      :
      "dark"
  })

  const handleMode = () => {
    localStorage.setItem("color_theme", JSON.stringify(state?.themeMode))
    dispatch({
      type: "COLOR_THEME",
      payload: {
        colorTheme: state?.themeMode
      }
    })
  }

  useEffect(() => {
    handleMode()
  }, [state])

  return (
    <div className="toggle-mode-buttons"
      data-mode={state?.themeMode}
    >
      {state?.themeMode === "light" ?
        <button
          type="button"
          onClick={() => dispatchMode({ type: "DARK" })}
        >
          <MoonIcon />
        </button>
        :
        <button
          type="button"
          onClick={() => dispatchMode({ type: "LIGHT" })}
        >
          <SunIcon />
        </button>
      }
    </div>
  )
}

export default ToggleMode