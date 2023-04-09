import React, { useState } from "react"

import Section from "../common/Section"
import Download from "../common/Download"
import Banner from "../common/Banner"

function BusinessStrategy({ content }) {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <>
      <Section
        heading={content.heading}
        subHeading={content.subHeading}
        fullWidth
      >
        <div className="relative w-full h-[450px] md:h-[550px] lg:h-[680px]">
          {content.slides.map((slide, i) => {
            return (
              <Banner
                content={slide}
                slider
                hide={i !== activeSlide}
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
            )
          })}
        </div>

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
