import React, { useState } from "react"
import Section from "../common/Section"
import Download from "../common/Download"

import Banner from "../common/Banner"

function BusinessStrategy({ content }) {
  const [activeSlide, setActiveSlide] = useState(0)
  console.log("activeSlide", activeSlide)
  return (
    <>
      <Section
        heading={content.heading}
        subHeading={content.subHeading}
        fullWidth
      >
        <Banner
          content={content.slides[activeSlide]}
          slider
          onClickForward={() =>
            activeSlide < content.slides.length - 1
              ? setActiveSlide(activeSlide + 1)
              : setActiveSlide(0)
          }
          onClickBack={() =>
            activeSlide === 0
              ? setActiveSlide(content.slides.length - 1)
              : setActiveSlide(activeSlide - 1)
          }
        />
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
