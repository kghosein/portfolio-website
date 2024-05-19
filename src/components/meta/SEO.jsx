import { Helmet } from "react-helmet-async"

const ogImage = "https://firebasestorage.googleapis.com/v0/b/portfolio-website-343f7.appspot.com/o/icon.svg?alt=media&token=a660ecb9-7e1b-411a-916c-f94d1d3f9762"

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
