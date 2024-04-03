import data from "../data/data.json"
import ExternalLink from "./ExternalLink"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="inner-container">
      <footer className="footer">
        <p>
          <span>&#169;</span> {currentYear} | Site built with <ExternalLink link={data?.footer?.react} />, hosted on <ExternalLink link={data?.footer?.hosting} />, open source on <ExternalLink link={data?.footer?.repoLink} />.
        </p>
      </footer>
    </div>
  )
}

export default Footer