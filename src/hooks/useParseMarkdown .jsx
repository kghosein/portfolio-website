import frontMatter from "front-matter"
import { useCallback, useEffect, useState } from "react"

export const useParseMarkdown = (mdFilePath) => {
  const [content, setContent] = useState(() => "")
  const [frontmatter, setFrontmatter] = useState(() => "")

  const fetchMarkdown = useCallback(async () => {
    try {
      const response = await fetch(mdFilePath)
      const markdownContent = await response.text()
      const { attributes, body } = frontMatter(markdownContent)
      setFrontmatter(attributes) // markdown frontMatter
      setContent(body) // markdown content
    } catch (err) {
      console.log(err, "error parsing markdown")
    }
  }, [mdFilePath])

  useEffect(() => {
    fetchMarkdown()
  }, [fetchMarkdown])

  return {
    content,
    frontmatter,
  }
}