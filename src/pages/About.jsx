import myImage from "../assets/my-image.jpg"
import Headings from "../components/Headings"
import {
  pageHeading,
  projectHeading,
  socialLinksHeading,
  github,
  twitter,
  stackOverFlow,
  linkedIn,
  pageHeadingMbl,
  socialLinksHeadingMbl,
} from "../data/data.about"
import ExternalLink from "../components/ExternalLink"
import ExternalLinkIcon from "../components/svgs/ExternalLinkIcon"
import { FlexHOC, MainHOC } from "../templates/HOC"
import data from "../data/data.json"
import { useWindowSize } from "@react-hookz/web"

const SocialLink = ({ socialLink }) => {
  const link = {
    href: socialLink?.href,
  }

  return (
    <div
      style={{ backgroundImage: `url(${socialLink?.bgBlob})` }}
      className="flex-hoc__el"
    >
      <ExternalLink
        link={link}
        cssClass={"shake-slow social-links__a"}
        icon={socialLink?.icon}
      />
    </div>
  )
}

const SocialLinks = () => (
  <>
    <SocialLink socialLink={github} />
    <SocialLink socialLink={twitter} />
    <SocialLink socialLink={stackOverFlow} />
    <SocialLink socialLink={linkedIn} />
  </>
)

const SocialLinksWithHOC = FlexHOC(SocialLinks)

const About = () => {
  const { width: windowWidth } = useWindowSize()

  return (
    <>
      <section className="about-section">
        <Headings pageHeading={windowWidth <= 767 ? pageHeadingMbl : pageHeading} />
        <div className="hero-section">
          <img src={myImage} alt="author" className="hero-section__image" />
          <article className="hero-section__description">
            <p>{data.about.section1.bio}</p>
          </article>
        </div>
      </section>
      <section className="projects-section">
        <Headings pageHeading={projectHeading} />
        <div className="projects-section__description">
          <p>
            For projects please refer to my{" "}
            <ExternalLink
              link={data.about.links.github}
              icon={<ExternalLinkIcon />}
            />
            profile.
          </p>
        </div>
      </section>
      <section className="social-links">
        <Headings pageHeading={windowWidth <= 767 ? socialLinksHeadingMbl : socialLinksHeading} />
        <SocialLinksWithHOC />
      </section>
    </>
  )
}

export default MainHOC(About, pageHeading)
