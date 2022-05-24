import React from "react"
import "../assets/styles/sb-textarea.scss"

const SbTextArea = ({ type }) => {
  return (
    <div>
      <div className="icons-main">
        <div className="icons-box">
          <div>
            <span>
              <label className="text-capitalize">{type}</label>
            </span>
          </div>
        </div>
      </div>
      <div>
        <textarea rows="22" cols="60"></textarea>
      </div>
    </div>
  )
}

export default SbTextArea
