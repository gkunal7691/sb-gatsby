import React from "react"
import SbBanner from "./sb-banner"
import { Link } from "gatsby"
import "../assets/styles/portfolios.scss"
import portfolio1 from "../images/portfolio/1.jpg"
import portfolio2 from "../images/portfolio/2.jpg"
import portfolio3 from "../images/portfolio/3.jpg"
import portfolio4 from "../images/portfolio/4.jpg"
import portfolio5 from "../images/portfolio/5.jpg"

const PortfoliosPage = () => {
  return (
    <SbBanner sbActive={"portfolios"} title="Portfolios">
      <section className="portfolio-creative p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 p-0 isotopeSelector">
              <img src={portfolio1} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 p-0 h-100 my-auto">
              <div className="portfolio-text m-auto text-center">
                <h2 className="head-text">Lorem Ipsum</h2>
                <p className="head-sub-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took Link galley of type and scrambled it to make Link
                  type specimen book.
                </p>
                <Link className="btn btn-outline-success">view more</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-0 isotopeSelector order-md-2">
              <img src={portfolio2} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 p-0 h-100 my-auto">
              <div className="portfolio-text m-auto text-center">
                <h2 className="head-text">Lorem Ipsum</h2>
                <p className="head-sub-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took Link galley of type and scrambled it to make Link
                  type specimen book.
                </p>
                <Link className="btn btn-outline-success">view more</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-0 isotopeSelector">
              <img src={portfolio3} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 p-0 h-100 my-auto">
              <div className="portfolio-text m-auto text-center">
                <h2 className="head-text">Lorem Ipsum</h2>
                <p className="head-sub-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took Link galley of type and scrambled it to make Link
                  type specimen book.
                </p>
                <Link className="btn btn-outline-success">view more</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-0 isotopeSelector order-md-2">
              <img src={portfolio4} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 p-0 h-100 my-auto">
              <div className="portfolio-text m-auto text-center">
                <h2 className="head-text">Lorem Ipsum</h2>
                <p className="head-sub-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took Link galley of type and scrambled it to make Link
                  type specimen book.
                </p>
                <Link className="btn btn-outline-success">view more</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-0 isotopeSelector">
              <img src={portfolio5} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 p-0 h-100 my-auto">
              <div className="portfolio-text m-auto text-center">
                <h2 className="head-text">Lorem Ipsum</h2>
                <p className="head-sub-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took Link galley of type and scrambled it to make Link
                  type specimen book.
                </p>
                <Link className="btn btn-outline-success">view more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SbBanner>
  )
}

export default PortfoliosPage
