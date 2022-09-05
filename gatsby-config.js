module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: "Portfolio",
    titleTemplate: "%s",
    description:
      "Personal Portfolio",
    url: "https://jsonfm.github.io/portfolio", // No trailing slash allowed!
    image: "./src/images/icon.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@j5on_",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/icon.png',
      }
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-smoothscroll`,
  ]
};