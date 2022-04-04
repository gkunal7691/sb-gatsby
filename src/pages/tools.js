import React, { Component } from "react"
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
      <div class="card-container">
        <ul class="tools">
          <li class="cards">
            <Link class="item-card " to="/tools/online-rar-extractor">
              <span class="module-title">Rar Extractor</span>
            </Link>
          </li>
          <li class="cards">
            <Link class="item-card" to="/tools/online-pdf-password-remover">
              <span class="module-title">PDF Pasword Remover</span>
            </Link>
          </li>
          <li class="cards">
            <Link class="item-card" to="/tools/online-json-to-xml-convertor">
              <span class="module-title">Json to XML Convertor</span>
            </Link>
          </li>
          <li class="cards">
            <Link class="item-card" to="/tools/online-xml-to-json-convertor">
              <span class="module-title">XML to Json Convertor</span>
            </Link>
          </li>
          <li class="cards">
            <Link class="item-card" to="/tools/online-json-to-yaml-convertor">
              <span class="module-title">Json to YAML Convertor</span>
            </Link>
          </li>
          <li class="cards">
            <Link class="item-card" to="/tools/online-yaml-to-json-convertor">
              <span class="module-title">YAML to Json Convertor</span>
            </Link>
          </li>
          <li class="cards">
            <Link class="item-card" to="/tools/online-json-formatter">
              <span class="module-title">Json Validator or Formatter</span>
            </Link>
          </li>
          <li class="cards">
            <Link class="item-card" to="online-xml-formatter">
              <span class="module-title">XML Validator or Formatter</span>
            </Link>
          </li>
          <li class="cards">
            <Link class="item-card" to="online-yaml-formatter">
              <span class="module-title">YAML Validator or Formatter</span>
            </Link>
          </li>
        </ul>
      </div>
    </SbHeading>
  )
}

export default ToolsPage
