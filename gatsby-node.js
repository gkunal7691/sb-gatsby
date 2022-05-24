const services = require("./src/assets/json/services.json")
const technologies = require("./src/assets/json/technologies.json")

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const BlogPost = path.resolve("./src/templates/blog-post.js")
  const BlogCategory = path.resolve("./src/templates/blog-category.js")
  const ServicePage = path.resolve("./src/templates/service-page.js")

  services.forEach(s => {
    actions.createPage({
      path: `/services/${s.slug}/`,
      component: ServicePage,
      context: { ...s, type: "services" },
    })
  })

  technologies.forEach(t => {
    actions.createPage({
      path: `/technologies/${t.slug}/`,
      component: ServicePage,
      context: { ...t, type: "technologies" },
    })
  })

  return graphql(
    `
      query pagesQuery {
        allContentfulEducation {
          edges {
            node {
              id
              slug
              title
              description
              authorName
              postedAt
              category
              isQuestion
              faq {
                answer
                question
              }
              bannerImage {
                title
                file {
                  url
                }
                gatsbyImageData(layout: CONSTRAINED)
              }
              content {
                raw
                references {
                  title
                  contentful_id
                  __typename
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const blogs = result.data.allContentfulEducation.edges.map(
      node => node.node
    )
    const categories = [...new Set(blogs.map(blog => blog.category))]

    categories.forEach(category => {
      actions.createPage({
        path: `/blog/${category.toLowerCase()}/`,
        component: BlogCategory,
        context: { category },
      })
    })

    blogs.forEach(blog => {
      actions.createPage({
        path: `/blog/${blog.category.toLowerCase()}/${blog.slug}/`,
        component: BlogPost,
        context: blog,
      })
    })
  })
}
