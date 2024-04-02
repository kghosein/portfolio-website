const Headings = ({ pageHeading }) => (
  <h2 className="page-heading">
    <span>{pageHeading?.text}</span>
    {pageHeading?.icon}
  </h2>
)

export default Headings
