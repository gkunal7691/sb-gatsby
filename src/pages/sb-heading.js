import React from "react"
import Layout from "../components/layout/layout"

const SbHeading = ({ title, subtitle, children, sbHeadingActive }) => {
  return (
    <Layout active={"sb-heading"}>
      <div className="text-center">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div sbHeadingActive={sbHeadingActive}>
        <div>{children}</div>
      </div>
    </Layout>
  )
}

export default SbHeading
