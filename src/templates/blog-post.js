import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"
import SbHeading from "../pages/sb-heading"
import "../assets/styles/blog-post.scss"
import breadcrumIcon from "../images/angle-right-solid.svg"
import Seo from "../components/layout/seo"
import dateFormat from "dateformat"

const BlogPost = ({ pageContext }) => {
  console.log(pageContext)
  const bannerImage = getImage(pageContext.bannerImage)

  const getParameterByName = (name, url) => {
    name = name.replace(/[\[\]]/g, "\\$&")
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ""
    return decodeURIComponent(results[2].replace(/\+/g, " "))
  }
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <span className="fw-bold">{text}</span>,
      [MARKS.UNDERLINE]: text => (
        <span className="text-decoration-underline">{text}</span>
      ),
      [MARKS.ITALIC]: text => <span className="text-italic">{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const imageID = node.data.target.sys.id
        const x = pageContext.content.references.find(
          ({ contentful_id: id }) => id === imageID
        )
        const image = getImage(x)
        return (
          <div className="my-2 d-flex flex-column align-items-center">
            <GatsbyImage
              image={image}
              className="blog-post-innner-image"
              alt={x.title}
            />
            <h6 className="text-dark fnt-14 font-monospace">{x.title}</h6>
          </div>
        )
      },
      [INLINES.HYPERLINK]: node => {
        if (node.data.uri.includes("player.vimeo.com/video")) {
          return (
            <div className="d-flex justify-content-center">
              <iframe
                title="Vimeo Video Player"
                src={node.data.uri}
                height="300"
                width="600"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )
        } else if (node.data.uri.includes("youtube.com/watch?")) {
          return (
            <div className="d-flex justify-content-center">
              <iframe
                loading="lazy"
                title="YouTube Video Player"
                src={`https://www.youtube.com/embed/${getParameterByName(
                  "v",
                  node.data.uri
                )}`}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                height="300"
                width="600"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )
        } else {
          return (
            <a rel="nofollow" href={node.data.uri}>
              {node.content[0].value}
            </a>
          )
        }
      },
    },
  }

  return (
    <SbHeading
      sbHeadingActive={"blog"}
      title="General Info Website!"
      subtitle="Every developer, especially in the
    digital age, outsources new technologies, and there is a need to migrate
    between tech stacks on a regular basis. Online Dev Tools is one such hub
    that satisfies all of the requirements for Web Development."
    >
      <Seo
        jsonLd={{
          url:
            "https://www.actuateminds.com/blog/" +
            pageContext.category.toLowerCase() +
            "/" +
            pageContext.slug +
            "/",
          headline: pageContext.title,
          image: pageContext.bannerImage.file.url,
          datePublished: pageContext.postedAt,
          authorName: pageContext.authorName,
          description: pageContext.description,
          category: pageContext.category,
          isQuestion: pageContext.isQuestion,
          faq: pageContext.faq,
        }}
        title={pageContext.title}
        description={pageContext.description}
      />
      <div className="container bg-white">
        <div className="col-md-10 mx-auto my-3 mb-lg-5">
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
            <Link
              className="fnt-md-18 fnt-lg-18 fnt-400 fnt-lg-500 text-black text-decoration-none"
              to={"/blog/" + pageContext.category.toLowerCase() + "/"}
            >
              <span className="text-black mb-0">{pageContext.category}</span>
              <img
                className="mx-1"
                src={breadcrumIcon}
                alt="back-icon"
                height={22}
              />
            </Link>

            <p className="fnt-md-18 fnt-lg-18 fnt-400 text-black mb-0">
              {pageContext.title}
            </p>
          </div>

          <h1 className="mt-3 pt-1 text-center text-clr54">
            {pageContext.title}
          </h1>
          <h5 className="text-black d-flex justify-content-center">
            <div className="blog-card_tag">{pageContext.authorName}</div>
            <div className="blog-card_tag mx-3">
              {dateFormat(pageContext.postedAt, "longDate")}
            </div>
          </h5>
          <p className="text-center px-2">
            <b>{pageContext.description}</b>
          </p>
          <GatsbyImage
            className="w-100 blog-post_image"
            alt={pageContext.bannerImage.title}
            image={bannerImage}
          />

          <div className="blog-post-text">
            <p>{renderRichText(pageContext.content, options)}</p>
          </div>
          {pageContext.faq && (
            <h2 className="mb-4 mt-5 fw-bold">FAQ's related to this article</h2>
          )}
          {pageContext.faq &&
            pageContext.faq.map((data, index) => (
              <>
                <h3>
                  {index + 1}. {data.question}
                </h3>
                <p className="pl-4">{data.answer}</p>
              </>
            ))}
        </div>
      </div>
    </SbHeading>
  )
}

export default BlogPost
