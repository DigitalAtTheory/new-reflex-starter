/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // Change the metadate below to match the current event
  siteMetadata: {
    title: `New Reflex Template`,
    siteUrl: `localhost:8000`,
    description: `A blank template for building a new reflex microsite`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
