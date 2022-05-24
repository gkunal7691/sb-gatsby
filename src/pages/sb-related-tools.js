import React from "react"
import "../assets/styles/sb-related-tools.scss"
import { Link } from "gatsby"

const SbRelatedPage = ({
  sbRelatedTitle1,
  sbRelatedTitle2,
  sbRelatedTitle3,
}) => {
  return (
    <div className="related-tools">
      <h3>Related Tools</h3>
      <div>
        <Link to="/tools/online-xml-formatter">{sbRelatedTitle1}</Link>
        <br />
        <Link to="/tools/online-json-formatter">{sbRelatedTitle2}</Link>
        <br />
        <Link to="/tools/online-yaml-formatter">{sbRelatedTitle3}</Link>
      </div>
    </div>
  )
}

export default SbRelatedPage
