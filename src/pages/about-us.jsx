import React, { Component } from "react"
import about from "../images/about.png"
import { Link } from "gatsby"
import "../assests/styles/about-us.scss"
import Layout from "../components/layout/layout"
import SbBanner from "./sb-banner"

const AboutUsPage = () => {
  return (
    <SbBanner sbActive={"about-us"} title="About Us">
      {/* <!-- About Section start --> */}
      <div className="about-area py-4 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12 info">
              <div className="about-wrapper" data-wow-delay="0.3s">
                <div>
                  <div className="section-header text-center">
                    <h2 className="section-title" data-wow-delay="0.3s">
                      About Us
                    </h2>
                    <div className="shape" data-wow-delay="0.3s"></div>
                  </div>
                  <div className="content">
                    <p>
                      Softobotics is a globally recognized software development
                      company focusing on Mobile Apps, Web Apps, DevOps, SEO etc
                      for better business solutions for the clients. Founded in
                      early 2018, we have worked with leading MNC companies and
                      non-profit organizations across globe. We offer practical
                      solutions! Our vision comes from our
                      <Link to="https://www.gauravkunal.com/"> founder</Link>'s
                      experience; after working on his own and tasting the real
                      need of the market he started recruiting and expanding his
                      reach through the field longing to satisfice and create a
                      whole new customer base. As we consider ourselves a group
                      of committed entrepreneurs, with more than 10 developers,
                      we take on a wide array of projects, ranging from
                      short-term corporate webpage development and support to
                      complex systems using CMS and third-party software. Our
                      philosophy goes hand in hand with user interface
                      satisfaction and excellence. Our field of appliance
                      involves using cutting-edge technologies such as Angular,
                      Nodejs, React, AWS, Java, Spring, PHP, HTML, JavaScript,
                      CSS3, Laravel, and Ionic, amongst others. The solutions
                      and growth opportunities we create work both ways,
                      impacting not only our clients but our own team of
                      developers, it's not about the money, it´s about achieving
                      together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12" data-wow-delay="0.3s">
              <img className="img-fluid" src={about} alt="about-us" />
            </div>
          </div>
        </div>
      </div>
    </SbBanner>
    //   <!-- About Section End -->
  )
}

export default AboutUsPage
