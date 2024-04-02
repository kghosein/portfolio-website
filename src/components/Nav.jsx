import { NavLink } from "react-router-dom"
import data from "../data/data.json"

const Nav = () => (
  <nav className="nav">
    <ul>
      {data?.nav?.navLinks.map((el, i) => (
        <li key={i}>
          <NavLink
            to={el?.link}
            className={({ isActive }) =>
              isActive ? "active-nav-link nav__link" : "nav__link"
            }
          >
            {el?.text}
          </NavLink>
        </li>
      ))}
      <li>
        <NavLink
          to={data?.nav?.hire?.link}
          className={({ isActive }) =>
            isActive
              ? "active-nav-link nav__hire-me nav__link"
              : "nav__link nav__hire-me"
          }
        >
          {data?.nav?.hire?.text}
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
