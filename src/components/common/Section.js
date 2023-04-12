import React from "react"
import cx from "classnames"

import Heading from "./Heading"

function Section({
  heading,
  subHeading,
  children,
  className,
  fullWidth = false,
  noBottomSpace = false,
}) {
  return (
    <section
      className={cx(
        "pt-10 sm:pt-14 md:pt-16 lg:pt-20 leading-snug",
        !noBottomSpace && "pb-10 sm:pb-14 md:pb-16 lg:pb-20",
        className ? className : ""
      )}
    >
      {heading && (
        <div className="container flex flex-col items-center">
          <div className="md:w-8/12 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
            <Heading
              level="h3"
              colour="black"
              className={cx("text-center", subHeading && `pb-4 md:pb-6`)}
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
      )}
      <div className={cx(fullWidth ? "w-full" : "container")}>{children}</div>
    </section>
  )
}

export default Section
