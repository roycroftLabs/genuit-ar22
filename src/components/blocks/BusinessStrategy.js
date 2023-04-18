import React from "react"

import Section from "../common/Section"
import Download from "../common/Download"
import Banner from "../common/Banner"
import Carousel from "../common/Carousel"

function BusinessStrategy({ content }) {
  return (
    <>
      <Section
        heading={content.heading}
        subHeading={content.subHeading}
        fullWidth
        className="carousel-noGaps carousel-strategic"
      >
        <Carousel fade fullWidth>
          {content.slides.map((slide, i) => {
            return <Banner index={i} key={i} content={slide} slider />
          })}
        </Carousel>
        <div className="container">
          <Download
            label={content.download.label}
            fileName={content.download.name}
            downloadName={content.download.fullName}
            theme="dark"
            className="mt-8"
          />
        </div>
      </Section>
    </>
  )
}

export default BusinessStrategy
