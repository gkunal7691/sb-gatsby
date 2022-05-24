import React from "react"
import SbTextArea from "../sb-textarea"
import SbRelatedPage from "../sb-related-tools"
import SbHeading from "../sb-heading"
import "../../assets/styles/tools/online-json-formatter.scss"

const JsonFormatter = () => {
  const example = `'{"name":"John", "age":30, "car":null}'`
  return (
    <SbHeading
      sbHeadingActive={"online-json-formatter"}
      title="Free Online Json Formatter, Prettier and Validator"
      subtitle="We provide free online JSON Formatter, Prettier and Validator which will help many developers in their daily work."
    >
      <div className="tool-container">
        <SbTextArea type="input" className="text-area" />
        <div className="button-align">
          <button className="btn btn-outline-primary">Beautify JSON</button>
        </div>
        <SbTextArea type="output" className="text-area" />
      </div>

      <div className="grid-container text-container">
        <div>
          <h2 style={{ textAlign: "center" }}>JSON Beautifier</h2>
          <p>
            JSON format is used for serializing and transmitting structured data
            over network connection. JSON commanly compresses blank space to
            reduce the amount of data transmitted to the server.&nbsp;
          </p>
          <p>
            Due to json blank space compressing technique will help in reducing
            the file size which is transfered to the server, Unlike XML because
            of that JSON become standard for data interchange over network.
          </p>
          <p>Most of the language support the JSON data format.</p>
          <h2>Why use JSON Beautifier?</h2>
          <p>
            Our online tool offers easy way to Beautify JSON data.&nbsp;
            <br />
            If the JSON data consist the image url then it will previvew that
            image in the data.
          </p>
          <h2>How to use this tool?</h2>
          <p>Just writte or copy pate the JSON data in the input box.</p>
          <p>
            Once you paste your code just click the Beautify JSON button,
            Beautified code will be genrated on the output box then user can
            copy or share the file.&nbsp;
          </p>
          <h2>JSON Data Types</h2>
          <p>The data types supported by the JSON are below:</p>
          <ul>
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>NULL</li>
            <li>Array</li>
            <li>Object</li>
          </ul>
          <p>
            Here is an example of rough JSON data:
            <br />
          </p>
          <p>{example}</p>
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

export default JsonFormatter
