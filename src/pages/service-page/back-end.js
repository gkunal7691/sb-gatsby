import React, { Component } from "react"
import SbBanner from "../sb-banner"
import serviceImg from "../../images/20.jpg"
import OtherServices from "../other-services"

const BackEnd = () => {
  return (
    <SbBanner sbActive={"back-end"} title="Service Details">
      <section className="agency blog-sec blog-sidebar single_blog_item">
        <div className="container-fluid"></div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-9">
              <div className="blog-block m-b-20">
                <div className="blog-box">
                  <h3 className="blog-head fnt-bold blog-text">
                    CRS/CMS Development
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
                <h6>July, 24th 2018</h6>
                <div className="blog-divider"></div>
                <div className="blog-description">
                  <p>
                    We even outsource our employees as an external resource to
                    other reputed companies., longDescription: dummy text of the
                    printing and typesetting industry.Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an
                    unknown printer took Link galley of type and scrambled it to
                    make Link type specimen book.It has survived not only five
                    centuries, but also the leap into electronic
                    typesetting,remaining essentially unchanged.It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages,and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
            <OtherServices />
          </div>
        </div>
      </section>
    </SbBanner>
  )
}

export default BackEnd
