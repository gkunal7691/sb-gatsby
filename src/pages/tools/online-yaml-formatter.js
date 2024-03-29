import React from "react"
import SbTextArea from "../sb-textarea"
import SbRelatedPage from "../sb-related-tools"
import SbHeading from "../sb-heading"
import "../../assets/styles/tools/online-yaml-formatter.scss"

const YamlFormatter = () => {
  return (
    <SbHeading
      sbHeadingActive={"online-yaml-formatter"}
      title="Free Online YAML or YML Formatter, Prettier and Validator"
      subtitle="We provide free online YAML or YML Formatter, Prettier and Validator which will help many developers in their daily work."
    >
      <div className="tool-container">
        <SbTextArea type="input" className="text-area" />
        <div className="button-align">
          <button className="btn btn-outline-primary">Beautify YAML</button>
        </div>
        <SbTextArea type="Output" className="text-area" />
      </div>

      <div className="grid-container text-container">
        <div>
          <h2>What is YAML?</h2>
          <p>
            YAML is a human-readable data-serialization language. It is commonly
            used for configuration files and in applications where data is being
            stored or transmitted. YAML targets many of the same communications
            applications as Extensible Markup Language but has a minimal syntax
            which intentionally differs from SGML.
          </p>
          <p>
            YAML accepts the entire Unicode character set, except for some
            control characters, and may be encoded in any one of UTF-8, UTF-16
            or UTF-32. (Though UTF-32 is not mandatory, it is required for a
            parser to have JSON compatibility.)
          </p>

          <h2>YAML Beautifier</h2>
          <p>
            This YAML beautifier provides you the facility to format your YAML
            code or query. This is a unique tool for formatting the YAML and its
            use is also very simple.
          </p>
          <h2>How to use YAML Beautifier?</h2>
          <p>
            Well, the use of an online YAML Beautifier is not so difficult. You
            just have to paste your YAML code which you have copied from the
            source.
            <br />
            After that, hit the &ldquo;<strong>Beautify YAML</strong>&rdquo;
            button and it will do the rest.
            <br />
            &nbsp;
            <br />
            The formatted output of the YAML code will be in front of you in
            just a matter of seconds.
          </p>
          <h3>Advantages of YAML</h3>
          <ul>
            <li>It can be read easily.</li>
            <li>
              The documents written in YAML format can be easily processed.
            </li>
            <li>
              The structure of YAML is easy to understand and allows you to
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
              By implementing the YAML standard of code, the user can declare
              their own bookmarks.
            </li>
          </ul>
          <h2>YAML Features</h2>
          <p>
            As we all know, the YAML schema basically deals with a set of rules,
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
            The prominent feature of YAML resides in its design, which has been
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
            Another feature of YAML documents is the complete separation of
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

export default YamlFormatter
