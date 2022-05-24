module.exports = {
  siteMetadata: {
    title: `Softobotics`,
    description: `Softobotics is a globally recognized software development company focusing on Mobile Apps, Web Apps, DevOps, SEO etc for better business solutions for the clients.`,
    author: `Softobotics`,
    siteUrl: `https://www.softobotics.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "cbk8m389sggz",
        accessToken: "chRqeGQgLer1ROP0lKRZ8y03CuMHD0mgDd8cf3irHOo",
        // environment: 'Testing'
      },
    },
  ],
}
