import React from "react"
import Section from "../common/Section"
import Download from "../common/Download"

import Banner from "./Banner"

function BusinessStrategy({ content }) {
  return (
    <>
      <Section
        heading={content.heading}
        subHeading={content.subHeading}
        fullWidth
      >
        <Banner content={content.slides[0]} />
        <div className="container">
          <Download
            label={content.downloadLabel}
            theme="dark"
            className="mt-8"
          />
        </div>
      </Section>
    </>
  )
}

export default BusinessStrategy
