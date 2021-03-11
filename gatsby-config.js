module.exports = {
    siteMetadata: {
        title: `Tawa Christadelphians`,
        description: `For as truly as I live all the earth shall be filled with the glory of Yahweh`,
        author: `Joshua Gore`,
    },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cache`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `2xwhdgg5nph4`,
                accessToken: `uCK9aJ5rf-u-FA5alwicM_xvMB3yMspsPVTJPPWqCdo`,
            },
        },
    ],
};
