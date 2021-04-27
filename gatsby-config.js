module.exports = {
  siteMetadata: {
    brandHeading: "Pixel Ranch LLC | Web Application Development",
    brandTagline: "Web Application Development and Web3 Expertise",
    description:
      "",
    language: "en",
    title: "Pixel Ranch"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`query-string`]
      }
    }
  ]
};
