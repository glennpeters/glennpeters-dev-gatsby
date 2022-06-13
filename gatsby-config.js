module.exports = {
  siteMetadata: {
    title: `Glenn Peters`,
    description: `Resume and portfolio website`,
    siteUrl: `https://www.glennpeters.dev`,
    author: `@gentlerpens`,
        // title: `glennpeters-dev`,
    siteUrl: `https://www.glennpeters.dev`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-less", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};