import React from "react"
import Heading from "./Heading"

function Section({ heading, subHeading, children, className }) {
  return (
    <section className={`pt-40 pb-20 ${className}`}>
      <div className="container flex flex-col items-center">
        <div className="pb-20">
          <Heading colour="black" className={subHeading && `pb-6`}>
            {heading}
          </Heading>
          {subHeading && (
            <Heading level="h5" className="">
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
