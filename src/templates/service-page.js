import React from "react"
import SbBanner from "../pages/sb-banner"
import serviceImg from "../images/20.jpg"
import OtherServices from "../pages/other-services"

const ServicesPage = ({ pageContext }) => {
  return (
    <SbBanner sbActive={"services"} title={pageContext.title}>
      <section className="agency blog-sec blog-sidebar single_blog_item">
        <div className="container-fluid"></div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-9">
              <div className="blog-block m-b-20">
                <div className="blog-box">
                  <h3 className="blog-head fnt-bold blog-text">
                    {pageContext.title}
                  </h3>
                  <div className="overflow-hidden">
                    <img
                      src={serviceImg}
                      alt="blog"
                      className="img-fluid blur-up lazyload"
                    />
                  </div>
                </div>
              </div>
              <div className="blog-text">
                <h4>{pageContext.shortDescription}</h4>
                <div className="blog-divider"></div>
                <div className="blog-description pb-4">
                  <p>{pageContext.longDescription}</p>
                </div>
              </div>
            </div>
            <OtherServices current={pageContext.slug} type={pageContext.type} />
          </div>
        </div>
      </section>
    </SbBanner>
  )
}

export default ServicesPage
