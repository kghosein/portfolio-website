import { pageHeading } from "../data/data.hire"
import Headings from "../components/Headings"
import { FlexHOC, MainHOC } from "../templates/HOC"
import ExternalLink from "../components/ExternalLink"
import data from "../data/data.json"
import SEO from "../components/meta/SEO"

const WorkLink = ({ myService }) => {
  const link = {
    href: myService?.href,
    text: myService?.text,
  }

  return (
    <div className="flex-hoc__el">
      <ExternalLink
        link={link}
        cssClass={"work-links__a"}
        isTargetBlank={false}
      />
      <p className="work-links__description">{myService?.description}</p>
    </div>
  )
}

const WorkLinks = () => (
  <>
    <WorkLink myService={data.hire.services.upwork} />
    <WorkLink myService={data.hire.services.email} />
  </>
)

const WorkLinksWithHOC = FlexHOC(WorkLinks)

const HireMe = () => (
  <>
    <SEO
      title={"Khalaf Hosein | Hire Me"}
      description={
        "Web developer specializing in dynamic, complex web applications using modern technologies like React and Node."
      }
      pageLink={"https://khalafhosein.site/hire-me"}
    />
    <div className="hire-me">
      <Headings pageHeading={pageHeading} />
      <section className="work-links">
        <p className="hire-me__description">{data.hire.description}</p>
        <WorkLinksWithHOC />
      </section>
    </div>
  </>
)

export default MainHOC(HireMe, pageHeading)
