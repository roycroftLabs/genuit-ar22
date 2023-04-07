/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "../common/Header"

const Layout = ({ siteTitle, children }) => {
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main className="bg-grey-mist">{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  )
}

export default Layout
