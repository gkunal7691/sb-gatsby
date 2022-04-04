import React from "react"
import { Link } from "gatsby"
import "../assests/styles/tools.scss"
import SbHeading from "./sb-heading"

const ToolsPage = () => {
  return (
    <SbHeading
      SbHeadingActive={"tools"}
      title="Online Tools for developers"
      subtitle="We provide all types of easy to use tools for developers which will be helpful for them in their day to day working"
    >
      <div className="card-container">
        <ul className="tools">
          <li className="cards">
            <Link className="item-card " to="/tools/online-rar-extractor">
              <span className="module-title">Rar Extractor</span>
            </Link>
          </li>
          <li className="cards">
            <Link className="item-card" to="/tools/online-pdf-password-remover">
              <span className="module-title">PDF Pasword Remover</span>
            </Link>
          </li>
          <li className="cards">
            <Link
              className="item-card"
              to="/tools/online-json-to-xml-convertor"
            >
              <span className="module-title">Json to XML Convertor</span>
            </Link>
          </li>
          <li className="cards">
            <Link
              className="item-card"
              to="/tools/online-xml-to-json-convertor"
            >
              <span className="module-title">XML to Json Convertor</span>
            </Link>
          </li>
          <li className="cards">
            <Link
              className="item-card"
              to="/tools/online-json-to-yaml-convertor"
            >
              <span className="module-title">Json to YAML Convertor</span>
            </Link>
          </li>
          <li className="cards">
            <Link
              className="item-card"
              to="/tools/online-yaml-to-json-convertor"
            >
              <span className="module-title">YAML to Json Convertor</span>
            </Link>
          </li>
          <li className="cards">
            <Link className="item-card" to="/tools/online-json-formatter">
              <span className="module-title">Json Validator or Formatter</span>
            </Link>
          </li>
          <li className="cards">
            <Link className="item-card" to="online-xml-formatter">
              <span className="module-title">XML Validator or Formatter</span>
            </Link>
          </li>
          <li className="cards">
            <Link className="item-card" to="online-yaml-formatter">
              <span className="module-title">YAML Validator or Formatter</span>
            </Link>
          </li>
        </ul>
      </div>
    </SbHeading>
  )
}

export default ToolsPage
