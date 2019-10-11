module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `data`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-theme-ui`,
  ],
}