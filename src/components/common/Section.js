import React from "react"
import cx from "classnames"

import Heading from "./Heading"

function Section({ heading, subHeading, children, className }) {
  return (
    <section className={`pt-40 pb-20 ${className}`}>
      <div className="container flex flex-col items-center">
        <div className="pb-20">
          <Heading
            level="h3"
            colour="black"
            className={cx("text-center", subHeading && `pb-6`)}
          >
            {heading}
          </Heading>
          {subHeading && (
            <Heading level="h5" className="text-center">
              {subHeading}
            </Heading>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section
