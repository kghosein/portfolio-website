import Headings from "../components/Headings"
import { MainHOC } from "../templates/HOC"
import {
  downloadResume,
  pageHeading,
  viewResumeMode,
} from "../data/data.resume"
import RenderPdf from "../components/RenderPdf"
import ViewModeCta from "../components/ViewResumeModeCta"
import { useSearchParams } from "react-router-dom"
import AccordionMode from "../components/AccordionMode"
import { useState } from "react"
import data from "../data/data.json"

const setArticleMode = "/resume?articleMode=true"
const setAccordionMode = "/resume?accordionMode=true"

const Resume = () => {
  const [searchParams] = useSearchParams()
  const articleMode = searchParams.get("articleMode")
  const accordionMode = searchParams.get("accordionMode")
  const [isHover, setIsHover] = useState(() => "")

  return (
    <>
      <section className="resume__main-heading">
        <Headings pageHeading={pageHeading} />
        <a
          href={downloadResume?.docs}
          className="resume__download-resume"
          download
        >
          {downloadResume?.text}
        </a>
      </section>
      <section className="resume__view-mode">
        <Headings pageHeading={viewResumeMode} />
        <div className="resume__view-mode__ctas">
          <ViewModeCta
            text={data.resume.section2.viewMode.article}
            cssClass={"resume__view-mode__article-mode"}
            action={setArticleMode}
            mode={articleMode}
            setIsHover={setIsHover}
          />
          <span>
            <span className={isHover ? `bar-1 ${isHover}` : "bar-1"} />
            <span className={isHover ? `bar-2 ${isHover}` : "bar-2"} />
          </span>
          <ViewModeCta
            text={data.resume.section2.viewMode.accordion}
            cssClass={"resume__view-mode__accordion-mode"}
            action={setAccordionMode}
            mode={accordionMode}
            setIsHover={setIsHover}
          />
        </div>
      </section>
      {articleMode && (
        <section className="render-pdf-document">
          <RenderPdf />
        </section>
      )}
      {accordionMode && (
        <section className="accordion-mode">
          <AccordionMode />
        </section>
      )}
    </>
  )
}

export default MainHOC(Resume, pageHeading)
