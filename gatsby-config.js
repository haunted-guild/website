module.exports = {
  siteMetadata: {
    title: `Haunted`,
    description: `Webseite der World of Warcraft Gilde 'Haunted' auf EU-Thrall.`,
    author: `@michael-herwig`,
    siteUrl: `https://haunted-guild.de/`,
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WoW Horde Gilde 'Haunted' auf EU-Thrall`,
        short_name: `Haunted | EU-Thrall`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/haunted-logo.png`,
      },
    },
  ],
}
