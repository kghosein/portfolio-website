import myImage from "../assets/my-image.jpg"
import Headings from "../components/Headings"
import {
  pageHeading,
  projectHeading,
  socialLinksHeading,
  githubExternalLink,
  githubLink,
  twitterLink,
  stackLink,
  bio
} from "../data/data.about"
import ExternalLink from "../components/ExternalLink"
import ExternalLinkIcon from "../components/svgs/ExternalLinkIcon"
import { FlexHOC, MainHOC } from "../templates/HOC"

const SocialLink = ({ socialLink }) => {
  const link = {
    "href": socialLink?.href
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
    <SocialLink socialLink={githubLink} />
    <SocialLink socialLink={twitterLink} />
    <SocialLink socialLink={stackLink} />
  </>
)

const SocialLinksWithHOC = FlexHOC(SocialLinks)

const About = () => {

  return (
    <>
      <section className="about-section">
        <Headings pageHeading={pageHeading} />
        <div className="hero-section">
          <div className="hero-section__image">
            <img src={myImage} alt="author" />
          </div>
          <article className="hero-section__description">
            <p>{bio?.bio}</p>
          </article>
        </div>
      </section>
      <section className="projects-section">
        <Headings pageHeading={projectHeading} />
        <div className="projects-section__description">
          <p>For projects please refer to my <ExternalLink link={githubExternalLink} icon={<ExternalLinkIcon />} />profile.</p>
        </div>
      </section>
      <section className="social-links">
        <Headings pageHeading={socialLinksHeading} />
        <SocialLinksWithHOC />
      </section>
    </>
  )
}

export default MainHOC(About, pageHeading)