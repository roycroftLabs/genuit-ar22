import React from "react"
import Heading from "../common/Heading"
import Section from "../common/Section"

import Chart1 from "../../images/bar-charts/Genuit_Highlight_Increase_in_net_debt_bar.svg"

function FinancialHighlights({ content }) {
  return (
    <Section heading={content.heading}>
      <div className="flex gap-6 w-full">
        {content.slides.map((slide, index) => {
          return (
            <div
              key={index}
              className="w-1/2 border-2 border-royal-blue bg-white p-6"
            >
              <Heading level="h3" className="uppercase">
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
              <img alt="bar chart of results" src={Chart1} className="w-full" />
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default FinancialHighlights
