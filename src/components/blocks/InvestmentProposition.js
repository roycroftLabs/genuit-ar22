import React from "react"
import cx from "classnames"

import Section from "../common/Section"
import CutCornerBox from "../common/CutCornerBox"
import Heading from "../common/Heading"

function InvestmentProposition({ content }) {
  return (
    <Section heading={content.heading} subHeading={content.subHeading}>
      <CutCornerBox>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {content.offering.map((item, i) => {
            return (
              <div
                key={i}
                className={cx(
                  "pb-8 border-royal-blue pr-6 border-b-2 sm:border-b-0",
                  (i + 1) % 3 === 0 ? "" : "lg:border-r-2",
                  (i + 1) % 2 === 0 ? "" : "sm:border-r-2 lg:border-r-0"
                )}
              >
                <Heading level="h4">{i + 1}</Heading>
                <Heading level="h3">{item}</Heading>
              </div>
            )
          })}
        </div>
      </CutCornerBox>
    </Section>
  )
}

export default InvestmentProposition
