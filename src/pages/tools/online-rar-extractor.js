import React from "react"
import SbHeading from "../sb-heading"
import "../../assets/styles/tools/online-rar-extractor.scss"
import folder from "../../images/folder-icon.svg"
import SbRelatedPage from "../sb-related-tools"

const RarExtractor = () => {
  return (
    <SbHeading
      sbHeadingActive={"online-rar-extractor"}
      title="Free Online RAR file extractor"
      subtitle="We provide free online RAR file extractor which will help many people in their daily work."
    >
      <div className="tool">
        <div className="tool__workarea" id="workArea">
          <div id="dropArea"></div>
          <div className="tool__header">
            <div className="row">
              <div className="col d-flex justify-content-center mt-5">
                <label className="btn btn-outline-info btn-lg ">
                  Choose file from your computer
                  <input type="file" hidden className="form-control-file" />
                  <img
                    src={folder}
                    alt="folder"
                    width="30"
                    height="30"
                    className="mt-3"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-container text-container">
        <div className="">
          <h2 id="what-is-xml">What is RAR?</h2>
          <p>
            A RAR file (short for a Roshal Archive Compressed file) is a
            compressed file, or data container, that holds one or more other
            files and folders inside of it.
          </p>

          <h2>What Are RAR Files Used For?</h2>
          <p>
            You'll probably only run into a RAR file when you're downloading
            computer software. File sharing websites and software distributors
            sometimes put their files in a RAR file so that they can compress it
            down to a smaller size, allowing you to download it faster than you
            otherwise could. Some RAR files are split into parts for easier
            transmission.
            <br />
            &nbsp;
            <br />
            Once you open a RAR file, you can extract the data from the inside
            and then use the files like you would any other file on you
            computer.
          </p>
          <h3>How to use this tool?</h3>
          <ul>
            <li>Click on choose file from your computer button.</li>
            <li>Then choose the folder to extract.</li>
            <li>
              Our tool will process your folder and give option to share or
              download the files
            </li>
          </ul>
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

export default RarExtractor
