import React from "react"
import SbTextArea from "../sb-textarea"
import SbRelatedPage from "../sb-related-tools"
import SbHeading from "../sb-heading"
import "../../assests/styles/tools/online-json-to-xml-convertor.scss"

const JsonToXml = () => {
  return (
    <SbHeading
      sbHeadingActive={"online-json-to-xml-convertor"}
      title="Free Online Json to XML Convertor"
      subtitle="We provide free online Json to XML Convertor which will help many developers in their daily work."
    >
      <div className="tool-container">
        <SbTextArea type="input" className="text-area" />
        <div className="button-align">
          <button className="btn btn-outline-primary">JSON TO XML</button>
        </div>
        <SbTextArea type="output" className="text-area" />
      </div>

      <div className="grid-container text-container">
        <div>
          <h1>JSON to XML Converter</h1>
          <p>
            This is an online tool that converts your JSON format data to XML
            data format and vice versa. It converts JSON objects into an XML
            tree structure.
          </p>
          <h2>How to use this JSON TO XML tool?</h2>
          <p>
            The tool we designed is easy to use. Kindly follow the below steps.
          </p>
          <ol>
            <li>Write or paste the JSON code into the input box.</li>
            <li>
              Press the &ldquo;JSON to XML button&rdquo; to convert the data
              into XML.
            </li>
            <li>
              If you want to convert XML to JSON, click on the &ldquo;XML to
              JSON&rdquo; button.
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
          <h2>What is XML?</h2>
          <p>
            XML stands for Extensible Markup Language is a markup language like
            HTML, it was originated from SGML for web use. It is used to
            represent structured text as well as to transfer data across the
            internet.
          </p>
          <p>
            &nbsp;XML is an extensible language, so you can use it to create
            your own tags and rules of markup languages like HTML.
          </p>
          <p>
            The XML structure is very easy to use who have little bit knowledge
            of HTML and XML file should have the root element.
          </p>
          <p>
            The defined tags used inside the root element contain attributes
            that are objects (key-value pairs).
          </p>
          <p>
            The whole XML is structured to obtain a hierarchal or tree
            structure.
          </p>
          <h2>Why do you need JSON to XML tool?</h2>
          <h3>To efficiently convert JSON format data to XML:</h3>
          <p>
            Nowadays programs are not written by single person on a single
            format so we need JSON to XML or vice versa helps you to convert
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
            Our tools will help in converting the data from JSON to XML or XML
            to JSON and save the human efforts with just one click
          </p>
          <p>&nbsp;</p>
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

export default JsonToXml
