import React from "react"
import Layout from "../components/layout/layout"
import "../assets/styles/sb-banner.scss"
import Seo from "../components/layout/seo"

const SbBanner = ({ sbActive, children, title, description }) => {
  return (
    <Layout active={sbActive}>
      <Seo title={title} description={description} />
      <div className="header row justify-content-center align-items-center">
        <h1 className="text-center">{title}</h1>
      </div>
      <div>
        <div>{children}</div>
      </div>
    </Layout>
  )
}

export default SbBanner
