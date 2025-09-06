import ResumeIcon from "../components/svgs/ResumeIcon"
import resumePdf from "/docs/Khalaf_Ibrahim_CV.pdf"
import EyesIcons from "../components/svgs/EyesIcons"
import data from "./data.json"

export const pageHeading = {
  "text": data.resume.section1.heading,
  "icon": <ResumeIcon />
}

export const viewResumeMode = {
  "text": data.resume.section2.heading,
  "icon": <EyesIcons />
}

export const downloadResume = {
  "text": data.resume.section1.downloadResume,
  "docs": resumePdf
}