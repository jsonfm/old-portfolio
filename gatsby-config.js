module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Personal Portfolio`,
    // siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ]
};