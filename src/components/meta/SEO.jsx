import { Helmet } from "react-helmet-async"
import ogImage from "/icon.svg"

const SEO = ({ title, description, pageLink }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={pageLink} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={pageLink} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={ogImage} />
  </Helmet>
)

export default SEO
