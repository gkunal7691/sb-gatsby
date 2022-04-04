import React, { Component, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Formik } from "formik"
import mobile from "../images/intro-mobile.png"
import feature from "../images/feature/intro-mobile.webp"
import robocore from "../images/testimonial/RoboCore-logo.png"
import eraofwe from "../images/testimonial/eraofwe-logo.png"
import getproven from "../images/testimonial/getproven-logo.png"
import capbpm from "../images/testimonial/capbpm-logo.webp"
import prewave from "../images/testimonial/prewave-logo.png"
import blobcity from "../images/testimonial/blobcity-logo.png"
import "../assests/styles/home.scss"
import axios from "axios"

const HomePage = () => {
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
    <React.Fragment>
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
                <img className="img-fluid" src={mobile} alt="intro" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Services Section Start --> */}
      <section className="section-padding py-4 py-md-5">
        <div className="container">
          <div className="section-header text-center">
            <h2 className=" wow fadeInDown" data-wow-delay="0.3s">
              Our Services
            </h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.5s"
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <i className=""></i>
                </div>
                <div className="services-content">
                  <h3>
                    <Link>Mobile App Development</Link>
                  </h3>
                  <p>
                    We design & develop any type of mobile apps for Andriod as
                    well as iOS.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.5s"
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <i className=""></i>
                </div>
                <div className="services-content">
                  <h3>
                    <Link>Web App Development</Link>
                  </h3>
                  <p>
                    Any type of web application development using Angular,
                    React, and Node etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.5s"
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <i className=""></i>
                </div>
                <div className="services-content">
                  <h3>
                    <Link>SEO Optimization</Link>
                  </h3>
                  <p>
                    We do SEO and digital marketing to make our clients good
                    online presence.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.5s"
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <i className=""></i>
                </div>
                <div className="services-content">
                  <h3>
                    <Link>UI/UX Design</Link>
                  </h3>
                  <p>
                    We have great team for UX/UI development for soothing user
                    experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.5s"
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <i className=""></i>
                </div>
                <div className="services-content">
                  <h3>
                    <Link>CRM/CMS Development</Link>
                  </h3>
                  <p>
                    Customised Coustomer Relationship Manager & Content
                    Management System development.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div
                className="services-item wow fadeInRight"
                data-wow-delay="1.5s"
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <i className=""></i>
                </div>
                <div className="services-content">
                  <h3>
                    <Link>Resource Outsourcing</Link>
                  </h3>
                  <p>
                    We even outsource our employees as an external resource to
                    other reputed companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Services Section End --> */}

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
                <div className="box-item">
                  <span className="icon">
                    <i className=""></i>
                  </span>
                  <div className="text">
                    <h4>Front End Development</h4>
                    <p>Angular, React, Vue, JavaScript etc.</p>
                  </div>
                </div>
                <div className="box-item">
                  <span className="icon">
                    <i className=""></i>
                  </span>
                  <div className="text">
                    <h4>Mobile Apps</h4>
                    <p>Flutter, React Native, Swift, Kotlin</p>
                  </div>
                </div>
                <div className="box-item">
                  <span className="icon">
                    <i className=""></i>
                  </span>
                  <div className="text">
                    <h4>UI/UX Design</h4>
                    <p>Adobe XD, Figma, SASS, Bootstrap</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="show-box w-100">
                <img src={feature} type="image/webp" alt="intro-mobile" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-right">
                <div className="box-item">
                  <span className="icon">
                    <i className=""></i>
                  </span>
                  <div className="text">
                    <h4>Back End Development</h4>
                    <p>Node, Java, Python, Spring Boot</p>
                  </div>
                </div>
                <div className="box-item">
                  <span className="icon">
                    <i className=""></i>
                  </span>
                  <div className="text">
                    <h4>Server Maintenance</h4>
                    <p>AWS, Heroku, Azure, Firebase, GCP</p>
                  </div>
                </div>
                <div className="box-item">
                  <span className="icon">
                    <i className=""></i>
                  </span>
                  <div className="text">
                    <h4>Database Management</h4>
                    <p>MySQL, PostgreSQL, MongoDB</p>
                  </div>
                </div>
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
                <img src={robocore} alt="RoboCore-logo" />
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
                <img src={eraofwe} alt="eraofwe-logo" />
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
                <img src={getproven} alt="getproven-logo" />
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
                <img src={capbpm} type="image/webp" alt="capbpm-logo" />
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
                <img src={prewave} alt="prewave-logo" />
              </Link>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="img-thumb">
              <Link target="_blank" rel="noreferrer" to="https://blobcity.com">
                <img src={blobcity} alt="blobcity-logo" />
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
                {/* <!-- <object style="border:0; height: 280px; width: 100%;" data="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.540327412644!2d77.6363799!3d12.9792013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42f703e556009bfd!2sSoftobotics%20Technologies!5e0!3m2!1sen!2sin!4v1632591129949!5m2!1sen!2sin"></object> --> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8847851910655!2d77.63417461455332!3d12.979220268223443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42f703e556009bfd!2sSoftobotics%20Technologies!5e0!3m2!1sen!2sin!4v1644156346863!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: "0px" }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Contact Section End --> */}
    </React.Fragment>
  )
}

export default HomePage
