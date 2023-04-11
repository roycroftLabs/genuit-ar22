/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "../common/Header"
import Footer from "./Footer"

import data from "../../data/common.json"

const Layout = ({ children }) => {
  return (
    <>
      <Header content={data.header} />
      <main className="bg-grey-mist">{children}</main>
      <Footer content={data.footer} />
    </>
  )
}

export default Layout
