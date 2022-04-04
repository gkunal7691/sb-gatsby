import React, { Component } from "react"
import SbHeading from "../sb-heading"
import "../../assests/styles/tools/online-pdf-password-remover.scss"

const PdfPasswordRemover = () => {
  return (
    <SbHeading
      sbHeadingActive={"online-pdf-password-remover"}
      title="Free Online PDF Password Remover"
      subtitle="We provide free online PDF Password Remover which will help many people in their daily work."
    >
      <div className="tool">
        <div className="tool__workarea" id="workArea">
          <div id="dropArea"></div>
          <div className="">
            <div>
              <label for="file1" className="file-upload">
                <button className="btn uploader__btn">Select PDF file</button>
                <input id="file1" type="file" multiple />
              </label>
              <div className="box-placeholder my-drop-zone">
                or drop PDF here
              </div>
            </div>
          </div>
        </div>
      </div>
    </SbHeading>
  )
}

export default PdfPasswordRemover
