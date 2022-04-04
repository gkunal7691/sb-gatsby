import React, { Component } from "react"
import Layout from "../components/layout/layout"
import "../assests/styles/sb-banner.scss"

const SbBanner = ({ sbActive, children, title }) => {
  return (
    <Layout active={"sb-banner"}>
      <div class="header row justify-content-center align-items-center">
        <h1 class="text-center">{title}</h1>
      </div>
      <div sbActive={sbActive}>
        <div>{children}</div>
      </div>
    </Layout>
  )
}

export default SbBanner
