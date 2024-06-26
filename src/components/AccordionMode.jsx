import { useState } from "react"
import Arrow from "./svgs/Arrow"
import { AnimatePresence, motion } from "framer-motion"
import { useParseMarkdown } from "../hooks/useParseMarkdown "
import Markdown from "markdown-to-jsx"
import data from "../data/data.json"

const variants = {
  hidden: {
    height: 0,
    overflow: "hidden",
  },
  visible: {
    height: "auto",
    overflow: "unset",
  },
}

const Accordion = ({ index, mdFile, active, handleToggle }) => {
  const { content, frontmatter } = useParseMarkdown(mdFile)

  return (
    <div
      className="accordion-mode__el"
      key={index}
      data-is-content={active === index ? true : false}
      style={{
        order: frontmatter?.appearanceOrder,
      }}
    >
      <div
        className="accordion-mode__el__header"
        onClick={handleToggle}
        data-is-content={active === index ? true : false}
      >
        <h3 dangerouslySetInnerHTML={{ __html: frontmatter?.mainHeading }} />
        <button className="accordion-mode__el__header__cta">
          <Arrow />
        </button>
      </div>
      {content && (
        <AnimatePresence>
          {active === index && (
            <motion.div
              initial={"hidden"}
              animate={"visible"}
              exit={"hidden"}
              variants={variants}
            >
              <div className="accordion-mode__el__content">
                <Markdown>{content}</Markdown>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

const AccordionMode = () => {
  const [active, setActive] = useState(() => false)

  const handleToggle = (index) => {
    setActive((prevIndex) => (prevIndex === index ? null : index))
  }

  return data.resume.section2.markdownFiles.map((el, i) => (
    <Accordion
      key={i}
      index={i}
      mdFile={el}
      active={active}
      handleToggle={() => handleToggle(i)}
    />
  ))
}

export default AccordionMode
