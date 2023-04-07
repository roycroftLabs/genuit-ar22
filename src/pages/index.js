import * as React from "react"

import Layout from "../components/common/Layout"
import Seo from "../components/common/Seo"

import Hero from "../components/blocks/Hero"
import FinancialHighlights from "../components/blocks/FinancialHighlights"
import InvestmentProposition from "../components/blocks/InvestmentProposition"

import data from "../data/homepage.json"
import Banner from "../components/blocks/Banner"

const Homepage = () => (
  <Layout siteTitle={data.header.title}>
    <Hero content={data.hero} />
    <FinancialHighlights content={data.financialHighlights} />
    <InvestmentProposition content={data.investmentProposition} />
    <Banner content={data.sustainableBusiness} />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Genuit Group" />

export default Homepage
