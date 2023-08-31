### Genuit Annual Review 2022

This is a one-page site for Genuit Group's Annual Report 2022, including PDF downloads of all reports.

This site is built using Gatsby and Tailwind for styling.

## 💫 Set up

This project uses Node version `18.15.0`

Navigate to the project's directory and install it.

    cd genuit-ar22/
    npm install

Then run it.

    npm start

Your site is now running at `http://localhost:8000`

## 🧐 What's inside?

Overview of top-level files and directories:

    .
    ├── node_modules
    ├── src // this is where the bulk of the code lives
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── tailwind.config.js
    ├── package.json
    └── README.md

**`/src`**: This directory will contain all of the code related to what you will see on the front-end of the site.

    src
    ├── components      // All shared and block-specific components live here
    ├── data            // All the site's content lives here in JSON format
    ├── images          // All images for the project
    ├── documents       // All PDFs for download
    ├── pages           // the only page for this microsite, plus a 404 template.
    ├── styles          // Some custom styles not handled by Tailwind such as complex CSS for SVG shapes and 3rd-party CSS for carousels

## 🚀 Deploy

Generate production-ready code:

    npm install
    npm run build

You can then run `npm run serve` to see the production version locally before deploying.

When deploying, make sure you are using the correct version of Node (see 'set up' above).

## 🎓 If you're not familiar with Gatsby

Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, you can start with an [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to the documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
