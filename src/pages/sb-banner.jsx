import React from "react"
import Layout from "../components/layout/layout"
import "../assests/styles/sb-banner.scss"

const SbBanner = ({ sbActive, children, title }) => {
  return (
    <Layout active={"sb-banner"}>
      <div className="header row justify-content-center align-items-center">
        <h1 className="text-center">{title}</h1>
      </div>
      <div sbActive={sbActive}>
        <div>{children}</div>
      </div>
    </Layout>
  )
}

export default SbBanner
