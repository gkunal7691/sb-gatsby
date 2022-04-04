import React from "react"
import SbHeading from "./sb-heading"
import { Link } from "gatsby"
import "../assests/styles/blogs.scss"

const BlogsPage = () => {
  const categorires = ["Physics", "Chemistry", "Maths", "Biology", "General"]
  return (
    <SbHeading
      sbHeadingActive={"blog"}
      title="General Info Website!"
      subtitle="Every developer, especially in the
    digital age, outsources new technologies, and there is a need to migrate
    between tech stacks on a regular basis. Online Dev Tools is one such hub
    that satisfies all of the requirements for Web Development."
    >
      <div className="container mt-md-5 mt-4 border-bottom pb-4">
        <div className="row">
          {categorires.map((category, i) => (
            <div
              key={i}
              className={`mb-4 ${
                i === 0 ? "col-md-4" : i === 1 ? "col-md-4" : "col-md-4"
              } ${i === 0 ? "col-md-4" : i === 1 ? "col-lg-4" : "col-lg-4"}`}
            >
              <Link
                to={`/blog/${category.toLowerCase()}/`}
                className="text-decoration-none"
              >
                <div
                  className={`blog-card_image-wrapper ${
                    i === 0 ? "blog-card_small-image" : "blog-card_small-image"
                  }`}
                >
                  <img
                    src={
                      require("../images/blog-categories/" +
                        category.toLocaleLowerCase() +
                        ".webp").default
                    }
                    alt={category}
                    className="w-100 blog-card_image"
                  />
                  <h3 className="text-black text-center mb-4">{category}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SbHeading>
  )
}

export default BlogsPage
