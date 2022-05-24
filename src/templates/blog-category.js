import { graphql, Link } from "gatsby"
import React from "react"
import "../assets/styles/blogs.scss"
import SbHeading from "../pages/sb-heading"
import breadcrumIcon from "../images/angle-right-solid.svg"
import Seo from "../components/layout/seo"
import dateFormat from "dateformat"

const BlogCategory = ({ data }) => {
  const blogPosts = data.allContentfulEducation.edges.map(node => node.node)
  console.log(blogPosts)
  return (
    <SbHeading
      sbHeadingActive={"blog"}
      title={`Checkout our weekly ${blogPosts[0].category} blogs`}
      subtitle={`Read our quality educational blogs related to latest topics around ${blogPosts[0].category} which are explained in easy and simple way.`}
    >
      <Seo
        title={`Checkout our weekly ${blogPosts[0].category} blogs`}
        description={`Read our quality educational blogs related to latest topics around ${blogPosts[0].category} which are explained in easy and simple way.`}
      />

      <div className="container mt-3 border-bottom pb-4">
        <div className="pt-4 pb-3 d-flex back-icon">
          <Link
            className="fnt-md-18 fnt-lg-18 fnt-400 fnt-lg-500 text-black text-decoration-none"
            to="/"
          >
            <span className="text-black mb-0">Actuate Minds</span>
            <img
              className="mx-1"
              src={breadcrumIcon}
              alt="back-icon"
              height={22}
            />
          </Link>

          <Link
            className="fnt-md-18 fnt-lg-18 fnt-400 fnt-lg-500 text-black text-decoration-none"
            to="/blog/"
          >
            <span className="text-black mb-0">Blogs</span>
            <img
              className="mx-1"
              src={breadcrumIcon}
              alt="back-icon"
              height={22}
            />
          </Link>
          <p className="fnt-md-18 fnt-lg-18 fnt-400 text-black mb-0">
            {blogPosts[0].category}
          </p>
        </div>
        <h1 className="text-center">{blogPosts[0].category} blogs</h1>
        <p className="text-center pb-4">
          {`Read our quality educational blogs related to latest 
          ${blogPosts[0].category} topics which are explained in easy and simple`}
          way.
        </p>
        <div className="row">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className={`mb-4 ${
                i === 0 ? "col-md-4 " : i === 1 ? "col-md-4" : "col-md-4"
              } ${i === 0 ? "col-md-4" : i === 1 ? "col-lg-4" : "col-lg-4"}`}
            >
              <Link
                to={`/blog/${post.category.toLowerCase()}/${post.slug}/`}
                className="text-decoration-none"
              >
                <div
                  className={`blog-card_image-wrapper ${
                    i === 0 ? "blog-card_small-image" : "blog-card_small-image"
                  }`}
                >
                  <img
                    src={post.bannerImage?.file.url}
                    alt={post.title}
                    className="w-100 blog-card_image"
                  />
                  <h5 className="text-black px-3 d-flex justify-content-between">
                    <div className="blog-card_tag">{post.authorName}</div>
                    <div className="blog-card_tag">
                      {dateFormat(post.postedAt, "longDate")}
                    </div>
                  </h5>
                  <h3 className="text-black px-2 px-md-3 mb-3">{post.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SbHeading>
  )
}

export default BlogCategory

export const query = graphql`
  query FilterByCat($category: String!) {
    allContentfulEducation(filter: { category: { eq: $category } }) {
      edges {
        node {
          id
          title
          authorName
          postedAt
          slug
          category
          bannerImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`
