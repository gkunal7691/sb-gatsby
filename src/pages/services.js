import React from "react"
import SbBanner from "./sb-banner"
import "../assets/styles/services.scss"
import ServiceGrid from "../components/service-grid"

const ServicesPage = () => {
  return (
    <SbBanner sbActive={"services"} title="Service Details">
      <section className="agency blog-sec blog-sidebar single_blog_item">
        <div className="container-fluid"></div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-block m-b-20">
                <div className="blog-box">
                  <ServiceGrid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SbBanner>
  )
}

export default ServicesPage
