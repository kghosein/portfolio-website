import { Helmet } from "react-helmet-async"

const SEO = ({ title, description, pageLink }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={pageLink} />
  </Helmet>
)

export default SEO
