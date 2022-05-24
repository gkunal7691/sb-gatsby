import React from "react"
import SbTextArea from "../sb-textarea"
import SbRelatedPage from "../sb-related-tools"
import SbHeading from "../sb-heading"
import "../../assets/styles/tools/online-yaml-to-json-convertor.scss"

const YamlToJson = () => {
  return (
    <SbHeading
      sbHeadingActive={"online-yaml-to-json-convertor"}
      title="Free Online YAML or YML to JSON Convertor"
      subtitle="'We provide free online YAML or YML to Json  Convertor which will help many developers in their daily work."
    >
      <div className="tool-container">
        <SbTextArea type="input" className="text-area" />
        <div className="button-align">
          <button className="btn btn-outline-primary">YAML TO JSON</button>
        </div>
        <SbTextArea type="output" className="text-area" />
      </div>
      <div className="grid-container text-container">
        <div>
          <h1>YAML to JSON Converter</h1>
          <p>
            This is an online tool that converts your YAML format data to JSON
            data format and vice versa. It converts YAML tree structure into an
            JSON objects or arrays structure.
          </p>
          <h2>How to use this YAML TO JSON tool?</h2>
          <p>
            The tool we designed is easy to use. Kindly follow the below steps.
          </p>
          <ol>
            <li>Write or paste the YAML code into the input box.</li>
            <li>
              Press the &ldquo;YAML to JSON button&rdquo; to convert the data
              into JSON.
            </li>
            <li>
              If you want to convert JSON to YAML, click on the &ldquo;JSON to
              YAML&rdquo; button.
            </li>
            <li>
              You can download or copy your result by clicking on the download
              or copy button.
            </li>
          </ol>
          <h2>What is JSON?</h2>
          <p>
            JSON is an open standard file format and data interchange format
            that uses human-readable text to store and transmit data objects
            consisting of attribute–value pairs and arrays.
          </p>
          <p>
            It is a common data format with diverse uses in electronic data
            interchange, including that of web applications with servers.
          </p>
          <p>
            JSON format syntax has been derived from Javascript, but it is a
            language independent.
          </p>
          <p>
            JSON structure consist of object or array of objects , Objects are
            key-value pairs enclosed in inverted commas. Arrays are also data
            sets containing key-value pairs enclosed in square brackets. The
            whole code is enclosed in curly brackets.
          </p>
          <p>
            JSON structure is as simple Javascript object structure, So it's
            very easy to understand.
          </p>
          <h2>What is YAML?</h2>
          <p>
            YAML is a human-readable data-serialization language. It is commonly
            used for configuration files and in applications where data is being
            stored or transmitted.
          </p>
          <p>The YAML structure is very easy to use.</p>
          <p>
            The whole YAML is structured to obtain a hierarchal or tree
            structure.
          </p>
          <h2>Why do you need YAML to JSON tool?</h2>
          <h3>To efficiently convert YAML format data to JSON:</h3>
          <p>
            Nowadays programs are not written by single person on a single
            format so we need YAML to JSON or vice versa helps you to convert
            your file to another format efficiently.
          </p>
          <p>
            In future, you may come up with a file with needs to be used in a
            programs that supports another formats. So our, converters will come
            into play.
          </p>
          <p>
            if program does not support some formats then again we have to
            rewrite. So just use our tools for conversation,
          </p>
          <h3>To get dual results:</h3>
          <p>
            Our tools will help in converting the data from YAML to JSON or JSON
            to YAML and save the human efforts with just one click
          </p>
          <p>&nbsp;</p>
        </div>
        <div>
          <div>
            <SbRelatedPage
              sbRelatedTitle1="XML Formatter"
              sbRelatedTitle2="JSON Formatter"
              sbRelatedTitle3="YAML Formatter"
            />
          </div>
        </div>
      </div>
    </SbHeading>
  )
}

export default YamlToJson
