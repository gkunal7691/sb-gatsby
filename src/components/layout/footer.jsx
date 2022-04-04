import React, { Component } from "react"
import { Link } from "gatsby"
import logo1 from "../../images/logosm.png"
import facebook from "../../images/facebook.svg"
import location from "../../images/location_on_black_24dp.svg"
import call from "../../images/call_black_24dp.svg"
import email from "../../images/email_black_24dp.svg"
import "../../assests/styles/footer.scss"

const FooterPage = () => {
  return (
    <footer className="footer-area">
      <div className="container px-0">
        <div className="row mx-0 px-3 px-md-0">
          <div className="col-lg-6 col-md-6 col-12 px-0">
            <div className="widget">
              <img className="footer-logo" src={logo1} alt="logo" />
              <div className="textwidget">
                <p>Innovate, automate and optimize your business with us.</p>
              </div>
              <div className="social-icon">
                <Link
                  className="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  to="https://www.linkedin.com/company/softobotics"
                >
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link
                  className="facebook"
                  target="_blank"
                  rel="noreferrer"
                  to="https://www.facebook.com/softoboticsadmin"
                >
                  <i className="lni-facebook-filled"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 px-0">
            <h3 className="footer-title">Our Services</h3>
            <ul class="footer-link px-0">
              <li>
                <Link to="/">Mobile Apps</Link>
              </li>
              <li>
                <Link to="/">Web Apps</Link>
              </li>
              <li>
                <Link to="">Fron End</Link>
              </li>
              <li>
                <Link to="">Back End</Link>
              </li>
              <li>
                <Link to="">SEO</Link>
              </li>
              <li>
                <Link to="">Outsourcing</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-12 px-0">
            <h3 className="footer-title">Contact</h3>
            <ul className="address px-0">
              <li>
                <Link to="#">
                  <img src={location} /> #235, 2nd & 3rd Floor, 13th Cross Rd,
                  Indira Nagar II Stage, Bengaluru, Karnataka 560038
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={call} />
                  Mobile: +91-8147594806
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={email} /> Email: info@softobotics.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container px-0">
        <div class="row mx-0">
          <div class="col-md-12">
            <div class="copyright-content">
              <p>
                Copyright © 2021
                <a href="https://www.softobotics.com">
                  <b>Softobotics Technologies</b>
                </a>
                . All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterPage
