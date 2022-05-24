import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Formik } from "formik"
// import mobile from "../images/intro-mobile.png"
// import feature from "../images/feature/intro-mobile.webp"
// import robocore from "../images/testimonial/RoboCore-logo.png"
// import eraofwe from "../images/testimonial/eraofwe-logo.png"
// import getproven from "../images/testimonial/getproven-logo.png"
// import capbpm from "../images/testimonial/capbpm-logo.webp"
// import prewave from "../images/testimonial/prewave-logo.png"
// import blobcity from "../images/testimonial/blobcity-logo.png"
import "../assets/styles/home.scss"
import axios from "axios"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import ServiceGrid from "../components/service-grid"
import technologies from "../assets/json/technologies.json"
import LineIcon from "react-lineicons"

const IndexPage = () => {
  const submitForm = async (
    values,
    errors,
    setSubmitting,
    setFieldValue,
    setFieldTouched
  ) => {
    if (errors && Object.values(errors)?.filter(e => e.length)?.length) {
      // return Swal.fire({
      //   icon: "error",
      //   text: "Please fill the required fields.",
      //   confirmButtonColor: "#30855c",
      //   timer: 3000,
      // })
      alert("Please fill the required fields.")
    }
    const url = `https://api.softobotics.com/v1/softobotics/leads`
    const body = {
      ...values,
    }
    axios
      .post(url, body)
      .then(res => {
        if (res.data.success) {
          alert("Thank you. We will get back to you soon.")
          ;["name", "email", "subject", "message"].forEach(element => {
            setFieldTouched(element, false)
            setFieldValue(element, "")
          })
        }
      })
      .catch(error => {
        alert(error.res.data?.errors[0] || "Oops! Something went wrong.")
      })
  }
  return (
    <Layout active={"index"}>
      <Seo title="Innovate, automate and optimize your business with us" />
      <div className="container">
        <div className="hero-area-bg ">
          <div className="row hero-main align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div className="contents">
                <h1 className="head-title mr-3">
                  Innovate, automate and optimize your business with us.
                </h1>
                <p>
                  Softobotics is a globally recognized software development
                  company focusing on Mobile Apps, Web Apps, DevOps, SEO etc for
                  better business solutions for the clients.
                </p>
                <div className="header-button">
                  <Link to="#contact" className="btn btn-outline-success ">
                    Contact us
                  </Link>
                  <Link
                    to="about-us/"
                    className="btn btn-outline-success  video-popup"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <div className="intro-img">
                <StaticImage
                  src="../images/intro-mobile.png"
                  alt="intro"
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section Start */}
      <ServiceGrid showHeading={true} />
      {/* Services Section End */}

      {/* <!-- Features Section Start --> */}
      <section id="features" className="section-padding ">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title ">Latest Technologies</h2>
            <div className="shape"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-left">
                {technologies.slice(0, 3).map(t => (
                  <div className="box-item">
                    <Link to={`/technologies/${t.slug}/`}>
                      <span className="icon">
                        <LineIcon name={t.icon} />
                      </span>
                      <div className="text">
                        <h4 className="text-black">{t.name}</h4>
                        <p className="text-black">{t.shortDescription}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="show-box w-100">
                <StaticImage
                  src="../images/feature/intro-mobile.webp"
                  type="image/webp"
                  alt="intro-mobile"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-right">
                {technologies.slice(3, 6).map(t => (
                  <div className="box-item">
                    <Link to={`/technologies/${t.slug}/`}>
                      <span className="icon">
                        <LineIcon name={t.icon} />
                      </span>
                      <div className="text">
                        <h4 className="text-black">{t.name}</h4>
                        <p className="text-black">{t.shortDescription}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features Section End -->  */}

      {/* <!-- Testimonial Section Start --> */}
      <section
        className="w-100 section-padding"
        style={{ backgroundColor: "#13928a" }}
      >
        <div className="section-header text-center">
          <h2 className="section-title">Our Partners</h2>
          <div className="shape"></div>
        </div>
        <div className="d-lg-flex d-md-flex d-sm-flex  justify-content-lg-around justify-content-md-around">
          <div className="testimonial-item">
            <div className="img-thumb">
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://robocore.systems"
              >
                <StaticImage
                  src="../images/testimonial/RoboCore-logo.png"
                  alt="RoboCore-logo"
                />
              </Link>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="img-thumb">
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://www.eraofwe.com/"
              >
                <StaticImage
                  src="../images/testimonial/eraofwe-logo.png"
                  alt="eraofwe-logo"
                  wid
                />
              </Link>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="img-thumb">
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://www.getproven.com/"
              >
                <StaticImage
                  src="../images/testimonial/getproven-logo.png"
                  alt="getproven-logo"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- second -half partners --> */}
        <div className="d-xl-flex d-lg-flex d-md-flex  justify-content-xl-around justify-content-lg-around justify-content-md-around mt-lg-5 mt-md-5">
          <div className="testimonial-item ">
            <div className="img-thumb">
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://www.capbpm.com/"
              >
                <StaticImage
                  src="../images/testimonial/capbpm-logo.webp"
                  type="image/webp"
                  alt="capbpm-logo"
                />
              </Link>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="img-thumb">
              <Link
                target="_blank"
                rel="noreferrer"
                to="https://www.prewave.com"
              >
                <StaticImage
                  src="../images/testimonial/prewave-logo.png"
                  alt="prewave-logo"
                />
              </Link>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="img-thumb">
              <Link target="_blank" rel="noreferrer" to="https://blobcity.com">
                <StaticImage
                  src="../images/testimonial/blobcity-logo.png"
                  alt="blobcity-logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial Section End --> */}

      {/* <!-- Contact Section Start --> */}
      <section id="contact" className="section-padding bg-gray py-4 py-md-5">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
              Contact Us
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
          </div>
          <div
            className="row contact-form-area wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-block">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  }}
                  validate={values => {
                    const errors = {}
                    if (!values.email) {
                      errors.email = "Required"
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address"
                    }
                    if (!values.name) {
                      errors.name = "Required"
                    }
                    if (!values.subject) {
                      errors.subject = "Required"
                    }
                    if (!values.message) {
                      errors.message = "Required"
                    }
                    return errors
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    setFieldValue,
                    setFieldTouched,
                    isSubmitting,
                    setSubmitting,
                  }) => (
                    <form
                      onSubmit={event => {
                        event.preventDefault()
                        submitForm(
                          values,
                          errors,
                          setSubmitting,
                          setFieldValue,
                          setFieldTouched
                        )
                      }}
                      id="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              {...`${
                                errors.name && touched.name ? "invalid" : ""
                              }`}
                              onChange={handleChange}
                              name="name"
                              value={values.name}
                              placeholder="Name"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="Email"
                              onChange={handleChange}
                              value={values.email}
                              className="form-control"
                              {...`${
                                errors.email && touched.email ? "invalid" : ""
                              }`}
                              name="email"
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="subject"
                              onChange={handleChange}
                              placeholder="Subject"
                              value={values.subject}
                              className="form-control"
                              {...`${
                                errors.subject && touched.subject
                                  ? "invalid"
                                  : ""
                              }`}
                              required
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              {...`${
                                errors.message && touched.message
                                  ? "invalid"
                                  : ""
                              }`}
                              name="message"
                              onChange={handleChange}
                              value={values.message}
                              placeholder="Your Message"
                              rows="7"
                              data-error="Write your message"
                              required
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                          <div className="submit-button text-left">
                            <button
                              className="btn btn-outline-success"
                              id="form-submit"
                              disabled={isSubmitting}
                              type="submit"
                            >
                              Send Message
                            </button>
                            <div className="h3 text-center hidden"></div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="map">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3889.0656098610348!2d77.6037132!3d12.9035027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151ee8f11d4b%3A0xf3f926959c69a2e5!2sPrerana%20Towers%2C%20Ranka%20Colony%20Rd%2C%20Munivenkatppa%20Layout%2C%20Bilekahalli%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1653310518111!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Contact Section End --> */}
    </Layout>
  )
}

export default IndexPage
