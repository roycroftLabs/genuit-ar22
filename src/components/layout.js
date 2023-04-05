/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Title" />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} &middot;</footer>
    </>
  )
}

export default Layout
