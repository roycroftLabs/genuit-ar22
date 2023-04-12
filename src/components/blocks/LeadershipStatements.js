import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import cx from "classnames"

import Heading from "../common/Heading"
import Section from "../common/Section"

import QuoteMarks from "../common/icons/QuoteMarks.js"
import Download from "../common/Download"

import Chairman from "../../images/leadership/leadership-Chairman-withoverlay.jpg"
import CEO from "../../images/leadership/leadership-CEO-withoverlay.jpg"
import CFO from "../../images/leadership/leadership-CFO-withoverlay.jpg"

const renderImage = name => {
  switch (name) {
    case "chairman":
    default:
      return <img src={Chairman} alt={name} className="mb-3 mt-4" />
    case "CEO":
      return <img src={CEO} alt={name} className="mb-3 mt-4" />
    case "CFO":
      return <img src={CFO} alt={name} className="mb-3 mt-4" />
  }
}
function LeadershipStatements({ content }) {
  return (
    <Section heading={content.heading} noBottomSpace>
      <div className="grid xl:grid-cols-2 xl:gap-x-40">
        {content.statements.map((statement, i) => {
          const odd = i % 2 !== 0
          return (
            <>
              <div
                className={cx(
                  "row-span-1 col-span-1 md:w-4/5 lg:w-3/5 xl:w-full",
                  odd
                    ? "xl:col-start-2 md:justify-self-end xl:justify-self-auto"
                    : "xl:col-start-1",
                  !odd ? `xl:row-start-${i + 1}` : ""
                )}
              >
                <Heading level="h2" className="md:pt-8">
                  {statement.heading}
                </Heading>
                {renderImage(statement.image)}
              </div>
              <div
                className={cx(
                  "row-span-1 col-span-1 md:w-4/5 lg:w-3/5 xl:w-full mb-20 md:mb-10 last:mb-10 xl:mb-0",
                  odd
                    ? "xl:col-start-2 md:justify-self-end xl:justify-self-auto"
                    : "xl:col-start-1"
                )}
              >
                <div className="w-12 mt-3 mb-1 text-royal-blue">
                  <QuoteMarks />
                </div>
                <Heading level="h3" className="mb-4">
                  {statement.quote}
                </Heading>
                <Heading level="h5" className="">
                  {statement.author},
                </Heading>
                <Heading level="h5" className="mb-6">
                  {statement.jobTitle}
                </Heading>
                <Download
                  label={statement.download.label}
                  fileName={statement.download.name}
                  theme="dark"
                />
              </div>
            </>
          )
        })}
      </div>
    </Section>
  )
}

export default LeadershipStatements
