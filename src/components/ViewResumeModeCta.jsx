import { useNavigate } from "react-router-dom"

const ViewModeCta = ({ text, action, mode = false, setIsHover }) => {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => {
        setIsHover("")
        navigate(action)
      }}
      className={mode ? "active-mode" : null}
      onPointerEnter={() => setIsHover(text)}
      onPointerLeave={() => setIsHover("")}
      disabled={mode ? true : false}
    >
      {text}
    </button>
  )
}

export default ViewModeCta
