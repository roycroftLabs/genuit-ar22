/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Annual Review 2022`,
    description: `Genuit Group's Annual Review 2022`,
    author: `Roycroft Labs for Luminous`,
    siteUrl: `https://www.roycroft-labs.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          backgroundColor: `transparent`,
          blurredOptions: {},
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Genuit Annual Review 2022`,
        short_name: `Genuit AR22`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NT8KZ22",
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Name of the event that is triggered
        // on every Gatsby route change.
        routeChangeEventName: "NEW_PAGE_LOAD",
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
}
