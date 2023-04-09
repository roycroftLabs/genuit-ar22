import React from "react"
import cx from "classnames"

import Heading from "./Heading"

function Section({
  heading,
  subHeading,
  children,
  className,
  fullWidth = false,
}) {
  return (
    <section
      className={`pt-40 pb-20 leading-snug ${className ? className : ""}`}
    >
      <div className="container flex flex-col items-center">
        <div className="md:w-8/12 pb-20">
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
      </div>
      <div className={cx(fullWidth ? "w-full" : "container")}>{children}</div>
    </section>
  )
}

export default Section
