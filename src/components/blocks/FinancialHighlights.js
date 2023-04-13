import React from "react"

import Heading from "../common/Heading"
import Section from "../common/Section"
import Carousel from "../common/Carousel"

import RevenueChart from "../../images/bar-charts/Genuit_Highlight_Revenue_bar.svg"
import OperatingProfitChart from "../../images/bar-charts/Genuit_Highlight_UnderlyingOperatingProfit_bar.svg"
import BasicEarningsChart from "../../images/bar-charts/Genuit_Highlight_Underlying_Basic_Earnings_bar.svg"
import ProfitChart from "../../images/bar-charts/Genuit_Highlight_Profit Before Tax.svg"
import CashChart from "../../images/bar-charts/Genuit_Highlight_Underlying_Cash_Generated_bar.svg"
import DebtChart from "../../images/bar-charts/Genuit_Highlight_Increase_in_net_debt_bar.svg"

const renderChart = name => {
  switch (name) {
    case "revenue":
    default:
      return (
        <img src={RevenueChart} alt="bar chart of revenue" className="w-full" />
      )
    case "operating-profit":
      return (
        <img
          src={OperatingProfitChart}
          alt="bar chart of operating profit"
          className="w-full"
        />
      )
    case "basic-earnings":
      return (
        <img
          src={BasicEarningsChart}
          alt="bar chart of basic earnings per share"
          className="w-full"
        />
      )
    case "profit-before-tax":
      return (
        <img
          src={ProfitChart}
          alt="bar chart of profit before tax"
          className="w-full"
        />
      )
    case "cash-generated":
      return (
        <img
          src={CashChart}
          alt="bar chart of cash generated"
          className="w-full"
        />
      )
    case "debt-increase":
      return (
        <img
          src={DebtChart}
          alt="bar chart of increase in net debt"
          className="w-full"
        />
      )
  }
}

function FinancialHighlights({ content }) {
  return (
    <Section heading={content.heading}>
      <div className="w-11/12 mx-auto">
        <Carousel>
          {content.slides.map((slide, index) => {
            return (
              <div
                key={index}
                index={index}
                className="border border-royal-blue bg-white p-6"
              >
                <Heading level="h4" className="uppercase">
                  {slide.heading}
                </Heading>
                <Heading level="h5" className="mb-8">
                  {slide.unit}
                </Heading>
                <Heading level="h1" className="">
                  {slide.figure}
                </Heading>
                <Heading level="h5" className="mb-4">
                  {slide.yearOnYear}
                </Heading>
                {renderChart(slide.chart)}
              </div>
            )
          })}
        </Carousel>
      </div>
    </Section>
  )
}

export default FinancialHighlights
