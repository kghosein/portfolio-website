import { useState } from "react"
import { Link } from "react-router-dom"

const ViewModeCta = ({
  text,
  cssClass,
  action,
  mode = false
}) => {
  const [hoverDirection, setHoverDirection] = useState(() => "")

  const handleHover = (e) => {
    const { clientX, clientY, target } = e
    const { left, top, width, height } = target.getBoundingClientRect()
    const x = clientX - left
    const y = clientY - top

    const dx = x / width - 0.5
    const dy = y / height - 0.5

    if (Math.abs(dx) > Math.abs(dy)) {
      setHoverDirection(dx > 0 ? "right" : "left")
    } else {
      setHoverDirection(dy > 0 ? "bottom" : "top")
    }
  }

  return (
    <Link
      to={action}
      className={`${cssClass} ${hoverDirection} ${mode ? "active-mode" : ""}`}
      onPointerEnter={handleHover}
      onPointerLeave={() => setHoverDirection("")}
    >
      {text}
    </Link>
  )
}

export default ViewModeCta