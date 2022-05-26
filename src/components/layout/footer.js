import { Link } from "gatsby"
import React from "react"
import LineIcon from "react-lineicons"
import services from "../../assets/json/services.json"
import technologies from "../../assets/json/technologies.json"
import "../../assets/styles/footer.scss"
import call from "../../images/call_black_24dp.svg"
import email from "../../images/email_black_24dp.svg"
import location from "../../images/location_on_black_24dp.svg"
import logo1 from "../../images/logosm-transparent.png"

const FooterPage = () => {
  return (
    <footer className="footer-area">
      <div className="container px-0">
        <div className="row mx-0 px-3 px-md-0">
          <div className="col-lg-3 col-md-6 col-12 px-0">
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
                  <LineIcon name="linkedin-original" />
                </Link>
                <Link
                  className="facebook"
                  target="_blank"
                  rel="noreferrer"
                  to="https://www.facebook.com/softoboticsadmin"
                >
                  <LineIcon name="facebook-filled" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 px-0 ml-0">
            <h3 className="footer-title">Our Services</h3>
            <ul className="ms-0 footer-link px-0">
              {services.map(s => (
                <li>
                  <Link to={`/services/${s.slug}/`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-12 px-0">
            <h3 className="footer-title">Technologies</h3>
            <ul className="ms-0 footer-link px-0">
              {technologies.map(s => (
                <li>
                  <Link to={`/technologies/${s.slug}/`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-12 px-0">
            <h3 className="footer-title">Contact</h3>
            <ul className="ms-0 address px-0">
              <li>
                <Link to="#">
                  <div className="row d-flex">
                    <div className="flex_0">
                      <img src={location} />
                    </div>
                    <div className="flex_80">
                      {" "}
                      Prerana Towers, 1st Floor, Ranka Colony Road, Bilekahalli,
                      Bengaluru, Karnataka 560076
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="tel:+918147594806">
                  <div className="row d-flex">
                    <div className="flex_0">
                      <img src={call} />
                    </div>
                    <div className="flex_80"> Mobile: +91-8147594806</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="mailto:info@softobotics.com">
                  <div className="row d-flex">
                    <div className="flex_0">
                      <img src={email} />
                    </div>
                    <div className="flex_80">Email: info@softobotics.com </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container px-0">
        <div className="row mx-0">
          <div className="col-md-12">
            <div className="copyright-content">
              <p>
                Copyright © {new Date().getFullYear()}
                <a href="https://www.softobotics.com">
                  <strong>&nbsp;Softobotics Technologies</strong>
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
