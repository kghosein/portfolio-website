import Headings from "../components/Headings"
import { MainHOC } from "../templates/HOC"
import { downloadResume, pageHeading, viewModeTexts, viewResumeMode } from "../data/data.resume"
import RenderPdf from "../components/RenderPdf"
import ViewModeCta from "../components/ViewResumeModeCta"
import { useSearchParams } from "react-router-dom"

const setArticleMode = "/resume?articleMode=true"
const setDevMode = "/resume?devMode=true"

const Resume = () => {
  const [searchParams] = useSearchParams()
  const articleMode = searchParams.get("articleMode")
  const devMode = searchParams.get("devMode")

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
            text={viewModeTexts?.articleMode}
            cssClass={"resume__view-mode__article-mode"}
            action={setArticleMode}
            mode={articleMode}
          />
          <span className="resume__view-mode__ctas__separator" />
          <ViewModeCta
            text={viewModeTexts?.devMode}
            cssClass={"resume__view-mode__dev-mode"}
            action={setDevMode}
            mode={devMode}
          />
        </div>
      </section>
      {articleMode && (
        <section>
          <RenderPdf />
        </section>
      )}
      {devMode && (
        <section>
          "dev mode"
        </section>
      )}
    </>
  )
}

export default MainHOC(Resume, pageHeading)