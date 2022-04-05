import React from "react"
import SbTextArea from "../sb-textarea"
import SbRelatedPage from "../sb-related-tools"
import SbHeading from "../sb-heading"
import "../../assests/styles/tools/online-xml-formatter.scss"

const XmlFormatter = () => {
  return (
    <SbHeading
      sbHeadingActive={"online-xml-formatter"}
      title="Free Online XML Formatter, Prettier and Validator"
      subtitle="We provide free online XML Formatter, Prettier and Validator which will help many developers in their daily work."
    >
      <div className="tool-container">
        <SbTextArea type="input" className="text-area" />
        <div className="button-align">
          <button className="btn btn-outline-primary">Validate XML</button>
        </div>
        <SbTextArea type="output" className="text-area" />
      </div>

      <div className="grid-container text-container">
        <div className="">
          <h2 id="what-is-xml">What is XML?</h2>
          <p>
            Extensible Markup Language (<strong>XML</strong>) is a
            meta-language, which represents structured information on the web,
            so it can be stored and transmitted.
          </p>
          <p>
            XML files usually contain any type of information, whether it is
            sensitive or any range of information.&nbsp;
            <br />
            XML files are composed of tags, which provide us with data and
            information we want to deal with.
          </p>
          <p>
            Usually, an XML file contains a large amount of information, which
            must be handled correctly by the user, especially by the
            developer.&nbsp;
          </p>
          <p>The bigger an XML file is; the more information it will bring.</p>
          <h2>XML Beautifier</h2>
          <p>
            This XML beautifier provides you the facility to format your XML
            code or query. This is a unique tool for formatting the XML and its
            use is also very simple.
          </p>
          <h2>How to use XML Beautifier?</h2>
          <p>
            Well, the use of an online XML Beautifier is not so difficult. You
            just have to paste your XML code which you have copied from the
            source.
            <br />
            After that, hit the &ldquo;<strong>Beautify XML</strong>&rdquo;
            button and it will do the rest.
            <br />
            &nbsp;
            <br />
            The formatted output of the XML code will be in front of you in just
            a matter of seconds.
          </p>
          <h3>Advantages of XML</h3>
          <ul>
            <li>It can be read easily.</li>
            <li>
              The documents written in XML format can be easily processed.
            </li>
            <li>
              The structure of XML is easy to understand and allows you to
              distinguish between different parts of a document.
            </li>
            <li>
              It facilitates information exchange between applications,
              regardless of the platform used.
            </li>
            <li>
              It is very easy to update the documents when changing or adding
              labels in them.
            </li>
            <li>
              By implementing the XML standard of code, the user can declare
              their own bookmarks.
            </li>
          </ul>
          <h2>XML Features</h2>
          <p>
            As we all know, the XML schema basically deals with a set of rules,
            which have been developed to allow larger data to be processed in a
            way that is easy for the computer and the programs to handle such
            data.
          </p>
          <p>
            This is why it has been successfully implemented in various
            applications and services that deal with large amounts of
            information (<strong>such as a database</strong>).
          </p>
          <p>
            The prominent feature of XML resides in its design, which has been
            focused from the start to make sure:
          </p>
          <ul>
            <li>Performance excellency</li>
            <li>Ease of use in web services&nbsp;</li>
            <li>
              Success in the field of large-scale electronic media publishing
            </li>
            <li>Simplicity of implementation&nbsp;</li>
          </ul>
          <p>
            Another feature of XML documents is the complete separation of
            structure and design, which allows the data contained to be exported
            to other formats, such as HTML, PDF, RTF, etc.&nbsp;
          </p>
          <p>
            In addition, a basic function is the ability to share data between
            different systems and platforms, such as web pages and databases.
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

export default XmlFormatter
