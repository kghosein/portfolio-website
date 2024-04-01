import { useNavigate } from "react-router-dom"

const ViewModeCta = ({ text, cssClass, action, mode = false, setIsHover }) => {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate(action)}
      className={mode ? `${cssClass} active-mode` : cssClass}
      onPointerEnter={() => setIsHover(text)}
      onPointerLeave={() => setIsHover("")}
      disabled={mode ? true : false}
    >
      {text}
    </button>
  )
}

export default ViewModeCta
