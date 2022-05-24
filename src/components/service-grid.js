import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import services from "../assets/json/services.json"
import LineIcon from "react-lineicons"

const ServiceGrid = ({ showHeading }) => {
  const [hindex, setHindex] = useState(-1)

  return (
    <section className="section-padding py-4 py-md-5">
      <div className="container">
        <div className="section-header text-center">
          {showHeading && (
            <h2 className=" wow fadeInDown" data-wow-delay="0.3s">
              Our Services
            </h2>
          )}
          <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
        </div>
        <div className="row">
          {services.map((s, i) => (
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.5s"
                onMouseLeave={() => setHindex(-1)}
                onMouseOver={() => setHindex(i)}
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <LineIcon
                    style={
                      hindex === i
                        ? {
                            color: "#FFFFFF",
                            size: "lg",
                          }
                        : {
                            color: "#13928a",
                            size: "lg",
                          }
                    }
                    name={s.icon}
                  />
                </div>
                <div className="services-content">
                  <h3>
                    <Link to={`/services/${s.slug}/`}>{s.name}</Link>
                  </h3>
                  <p>{s.shortDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceGrid
