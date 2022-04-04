import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./home"
import AboutUsPage from "./about-us"

const IndexPage = () => (
  <Layout active={"home"}>
    <Seo />
    <HomePage />
  </Layout>
)

export default IndexPage
