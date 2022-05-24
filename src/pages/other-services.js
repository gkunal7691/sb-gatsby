import React from "react"
import "../assets/styles/services.scss"
import { Link } from "gatsby"
import services from "../assets/json/services.json"
import technologies from "../assets/json/technologies.json"

const OtherServices = ({ current, type }) => {
  const arr = type === "services" ? services : technologies
  return (
    <div className="col-lg-3">
      <div className="blog-side">
        <div>
          <h5 className="blog-title">Other {type}</h5>
          <div className="sidebar-container borders">
            <ul className="sidebar-list pl-0">
              {arr
                .filter(s => s.slug !== current)
                .map(s => (
                  <li className="d-flex">
                    <Link to={`/${type}/${s.slug}`}>
                      <i
                        aria-hidden="true"
                        className="fa fa-angle-right m-r-15"
                      ></i>
                      {s.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherServices
