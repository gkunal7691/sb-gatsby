import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import menu from "../../images/menu.png"
import "../../assests/styles/header.scss"
import close from "../../images/close-icon.png"

const Header = () => {
  return (
    <React.Fragment>
      <header className="header-area">
        <nav className="d-md-flex justify-content-md-center">
          <div className="container menu-bar d-flex justify-content-between align-items-center px-3">
            <div className="logo mt-2">
              <Link to="https://www.softobotics.com/">
                <img src={logo} alt="menu" />
              </Link>
            </div>
            <Link
              data-toggle="collapse"
              data-target="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              {/* <img src={menu} alt="hamberg" height="24" width="24" />
              <img src={close} alt="hamberg" height="16" width="16" /> */}
            </Link>
            <div
              className="d-md-flex align-items-md-center collapse"
              id="collapseExample"
            >
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/portfolios">Portfolios</Link>
                </li>
                <li className="dropdown">
                  <Link className="d-none d-md-block">
                    Services
                    <i className="dropdown-icon" aria-hidden="true"></i>
                  </Link>
                  <div className="sub-menu" id="Service">
                    <ul className="text-left">
                      <li>
                        <Link to="/services">Mobile Apps</Link>
                      </li>
                      <li>
                        <Link to="/service-page/web-app/">Web Apps</Link>
                      </li>
                      <li>
                        <Link to="/service-page/front-end/">Fron End</Link>
                      </li>
                      <li>
                        <Link to="/service-page/back-end/">Back End</Link>
                      </li>
                      <li>
                        <Link to="/service-page/seo">SEO</Link>
                      </li>
                      <li>
                        <Link to="/service-page/outsourcing">Outsourcing</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/tools">Tools</Link>
                </li>
                <li>
                  <Link to="/blog">Blogs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header
