import React, { Component } from "react"
import "../assests/styles/services.scss"
import { Link } from "gatsby"

const OtherServices = () => {
  return (
    <div className="col-lg-3">
      <div className="blog-side">
        <div>
          <h5 className="blog-title">Other Services</h5>
          <div className="sidebar-container borders">
            <ul className="sidebar-list pl-0">
              <li className="d-flex">
                <Link to="/service-page/web-app">
                  <i
                    aria-hidden="true"
                    className="fa fa-angle-right m-r-15"
                  ></i>
                  Web Apps
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/service-page/front-end">
                  <i
                    aria-hidden="true"
                    className="fa fa-angle-right m-r-15"
                  ></i>
                  Front End
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/service-page/back-end">
                  <i
                    aria-hidden="true"
                    className="fa fa-angle-right m-r-15"
                  ></i>
                  Back End
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/service-page/seo">
                  <i
                    aria-hidden="true"
                    className="fa fa-angle-right m-r-15"
                  ></i>
                  SEO
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/service-page/outsourcing">
                  <i
                    aria-hidden="true"
                    className="fa fa-angle-right m-r-15"
                  ></i>
                  OutSourcing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherServices
