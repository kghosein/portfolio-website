import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import resume from "/docs/khalaf-hosein-resume.pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import SadEmoji from "./svgs/SadEmoji"
import { useWindowSize } from "@react-hookz/web"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

const MessageComponent = ({ icon = null, text }) => (
  <div className="render-pdf-custom-message">
    <span>{text}</span>
    {icon && icon}
  </div>
)

const RenderPdf = () => {
  const [numPages, setNumPages] = useState(() => "")
  const [pageNumber, setPageNumber] = useState(() => 1)
  const [showControls, setShowControls] = useState(() => false)
  const { width: windowWidth } = useWindowSize()

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setShowControls(true)
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1)

  return (
    <>
      {showControls && (
        <div className="render-pdf-document__controls">
          <div className="render-pdf-document__controls__inner">
            <button onClick={goToPrevPage}>Prev</button>
            <p>
              Page <span>{pageNumber}</span> of {numPages}
            </p>
            <button onClick={goToNextPage}>Next</button>
          </div>
        </div>
      )}
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
        error={
          <MessageComponent icon={<SadEmoji />} text={"Failed to load PDF."} />
        }
        loading={<MessageComponent text={"Loading PDF..."} />}
        noData={<MessageComponent text={"No PDF file specified."} />}
      >
        <Page
          pageNumber={pageNumber}
          error={
            <MessageComponent
              icon={<SadEmoji />}
              text={"Failed to load the page."}
            />
          }
          loading={<MessageComponent text={"Loading page..."} />}
          noData={<MessageComponent text={"No page specified."} />}
          scale={windowWidth <= 767 ? (windowWidth < 425 ? 0.4 : 0.6) : 1.1}
        />
      </Document>
    </>
  )
}

export default RenderPdf
