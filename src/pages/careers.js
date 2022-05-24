import React, { useState } from "react"
import about from "../images/about.png"
import "../assets/styles/about-us.scss"
import SbBanner from "./sb-banner"
import { Formik } from "formik"
import axios from "axios"

const CareersPage = () => {
  const [file, setFile] = useState()
  const submitForm = async (
    values,
    errors,
    _setSubmitting,
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
      return
    }
    const url = `https://api.softobotics.com/v1/softobotics/careers`
    let formdata = new FormData()

    formdata.append("fullName", values.fullName)
    formdata.append("email", values.email)
    formdata.append("message", values.message)
    formdata.append("resume", file)

    axios
      .post(url, formdata)
      .then(res => {
        if (res.data.success) {
          alert("Thank you. We will get back to you soon.")
          ;["fullName", "email", "message"].forEach(element => {
            setFieldTouched(element, false)
            setFieldValue(element, "")
          })
        }
      })
      .catch(error => {
        alert(error.res?.data?.errors[0] || "Oops! Something went wrong.")
      })
  }

  return (
    <SbBanner sbActive={"careers"} title="Work with us">
      {/* <!-- About Section start --> */}
      <div className="about-area py-4 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12 info">
              <div className="about-wrapper" data-wow-delay="0.3s">
                <div>
                  <div className="section-header text-center">
                    <h2 className="section-title" data-wow-delay="0.3s">
                      Wanna be a part of a dynamic &amp; exciting environment?
                    </h2>
                    <div className="shape" data-wow-delay="0.3s"></div>
                  </div>
                  <div className="content">
                    <p>
                      We are always looking for new talent to join our tech team
                      at Bangalore to help us provide the best solutions to our
                      clients.
                    </p>
                    <p>
                      If you are looking to upscale your career by facing
                      exciting new challenges with a high learning curve, get in
                      touch today!
                    </p>
                  </div>
                  <h6>
                    Drop in your resume and we'll get back to you if we find it
                    to be the right fit.
                  </h6>

                  <Formik
                    initialValues={{
                      fullName: "",
                      email: "",
                      message: "",
                      resume: null,
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
                      if (!values.fullName) {
                        errors.fullName = "Required"
                      }
                      if (!values.message) {
                        errors.message = "Required"
                      }
                      if (!values.resume) {
                        errors.resume = "Required"
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
                                  errors.fullName && touched.fullName
                                    ? "invalid"
                                    : ""
                                }`}
                                onChange={handleChange}
                                name="fullName"
                                value={values.fullName}
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
                                placeholder="What kind of role are you looking for?"
                                rows="4"
                                data-error="Write your message"
                                required
                              ></textarea>
                              <div className="help-block with-errors"></div>
                            </div>
                            <label className="contactFormInput input-file">
                              Attach your Resume&nbsp;
                              <input
                                type="file"
                                placeholder="Attach your Resume"
                                name="resume"
                                value={values.resume}
                                onChange={e => {
                                  setFile(e.target.files[0])
                                  handleChange(e)
                                }}
                                required
                              />
                            </label>
                            <div className="submit-button text-left">
                              <button
                                className="btn btn-outline-success"
                                id="form-submit"
                                disabled={isSubmitting}
                                type="submit"
                              >
                                Submit
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

export default CareersPage
