import React from "react"
import SbTextArea from "../sb-textarea"
import SbRelatedPage from "../sb-related-tools"
import SbHeading from "../sb-heading"
import { Link } from "gatsby"
import "../../assets/styles/tools/online-xml-to-json-convertor.scss"

const XmlToJson = () => {
  return (
    <SbHeading
      sbHeadingActive={"online-xml-to-json-convertor"}
      title="Free Online XML to JSON Convertor"
      subtitle="We provide free online XML to JSON Convertor which will help many developers in their daily work."
    >
      <div className="tool-container">
        <SbTextArea type="input" className="text-area" />
        <div className="button-align">
          <button className="btn btn-outline-primary">XML TO JSON</button>
        </div>
        <SbTextArea type="output" className="text-area" />
      </div>

      <div className="grid-container text-container">
        <div>
          <p>
            XML to JSON converter helps us to convert XML file to JSON file.
            <br />
            It's changes XML tree elements into the JSON key-value within a
            seconds.
          </p>
          <h2>How to convert XML to JSON?</h2>
          <p>To convert XML code, follow the below steps:</p>
          <ol>
            <li>Write or paste XML code in the input box.</li>
            <li>Click the XML TO JSON button.</li>
          </ol>
          <p>
            You can also convert your JSON code to XML by using our
            <Link to="/tools/online-json-to-xml-convertor">
              {" "}
              JSON to XML converter
            </Link>
            .
          </p>
          <h2>What are XML and JSON?</h2>
          <p>
            XML stands for Extensible Markup Language is a markup language like
            HTML, it was originated from SGML for web use. It is used to
            represent structured text as well as to transfer data across the
            internet.
          </p>
          <p>
            JSON is an open standard file format and data interchange format
            that uses human-readable text to store and transmit data objects
            consisting of attribute–value pairs and arrays.
          </p>
          <p>JSON is commanly used for transmitting the data in the Web.</p>
          <h2>How does this converter work?</h2>
          <p>
            The XML to JSON converter, Converts the XML tree structure code to
            JSON structure which basically contains objets and arrays.
          </p>
          <h3>XML Conversion Example:</h3>
          <p>
            Once you Write or paste the XMl code our tool will convert that to
            JSON:
            <br />
            <br />
            The common rules to convert XMl to JSON:
          </p>
          <ul>
            <li>
              The XML tags or attributes of the structure will be treated as
              JSON properties.
            </li>
            <li>
              if two are more root elements with same name will be traeted as
              array.
            </li>
            <li>
              The namespaces in the code are captured from the resulting
              property names.
            </li>
          </ul>
          <h3>JSON Conversion Example:</h3>
          <p>
            Once you Write or paste the JSON code our tool will convert that to
            XML:
            <br />
            The common rules to convert JSON to XML:
          </p>
          <ul>
            <li>JSON properties value will be converted to #item types.</li>
            <li>
              Root element is created and the offending characters will be XML
              escaped.
            </li>

            <li>
              Array entries will be converted to individual XML root elements.
            </li>
          </ul>
          <h2>Why use this converter?</h2>
          <p>
            It is a easy to use tool which help programmer to format his data
            XML to JSON or vice versa.
            <br />
            even we provide the example to the users:
          </p>
          <h3>Get an Example</h3>
          <p>Our tool provide quick example to the users.</p>
          <h3>Download Report</h3>
          <p>
            Once we done with the conversion it allow users to share or download
            the converted file.
          </p>
        </div>
        <div>
          <SbRelatedPage
            sbRelatedTitle1="XML Formatter"
            sbRelatedTitle2="JSON Formatter"
            sbRelatedTitle3="YAML Formatter"
          />
        </div>
      </div>
    </SbHeading>
  )
}

export default XmlToJson
