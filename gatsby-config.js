module.exports = {
  siteMetadata: {
    title: `Kovsky-dev | Front-end developpeur`,
    description: `Développeur front end depuis 8ans à Toulouse.`,
    author: `Johan Petrikovsky | marguerite.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
            variants: [`200`, `400`],
          },
          {
            family: `Roboto Mono`,
            variants: [`400`],
          },
          {
            family: `Share Tech Mono`,
            variants: [`400`],
          },
        ],
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'kovsky-blog', // (REQUIRED, replace with your own)
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-prismic-starter-prist`,
        short_name: `prist`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-42665818-2',
        head: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
