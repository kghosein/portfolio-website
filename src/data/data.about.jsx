import Projects from "../components/svgs/Projects"
import SocialLinks from "../components/svgs/SocialLinks"
import GithubIcon from "../components/svgs/GithubIcon"
import TwitterIcon from "../components/svgs/TwitterIcon"
import StackOverflowIcon from "../components/svgs/StackOverflowIcon"
import AboutIcon from "../components/svgs/AboutIcon"
import blob01 from "../assets/blob-01.svg"
import blob02 from "../assets/blob-02.svg"
import blob03 from "../assets/blob-03.svg"
import blob04 from "../assets/blob-04.svg"
import LinkedInIcon from "../components/svgs/LinkedInIcon"
import data from "./data.json"

export const pageHeading = {
  "text": data.about.section1.heading,
  "icon": <AboutIcon />
}

export const pageHeadingMbl = {
  "text": data.about.section1.headingMbl,
  "icon": <AboutIcon />
}

export const projectHeading = {
  "text": data.about.section2.heading,
  "icon": <Projects />
}

export const socialLinksHeading = {
  "text": data.about.section3.heading,
  "icon": <SocialLinks />
}

export const socialLinksHeadingMbl = {
  "text": data.about.section3.headingMbl,
  "icon": <SocialLinks />
}

export const github = {
  "href": data.about.links.github.href,
  "icon": <GithubIcon />,
  "bgBlob": blob01
}

export const twitter = {
  "href": data.about.links.twitter,
  "icon": <TwitterIcon />,
  "bgBlob": blob02
}

export const stackOverFlow = {
  "href": data.about.links.stackOverFlow,
  "icon": <StackOverflowIcon />,
  "bgBlob": blob03
}

export const linkedIn = {
  "href": data.about.links.linkedIn,
  "icon": <LinkedInIcon />,
  "bgBlob": blob04
}