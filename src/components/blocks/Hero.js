import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Heading from "../common/Heading"
import Download from "../common/Download"

function Hero({ content }) {
  return (
    <section className="relative w-full h-[810px] bg-royal-blue bg-hero bg-no-repeat bg-cover overflow-hidden">
      <div className="container flex justify-between items-stretch h-full py-10">
        <Heading
          level="h1"
          colour="white"
          className="w-1/3 z-10 relative self-end"
        >
          {content.heading}
        </Heading>
        <div className="w-1/2 sm:w-4/12 lg:w-3/12 xl:w-2/12 flex flex-col items-end self-start pt-20 z-10">
          <StaticImage
            src="../../images/thumbnails/report-download-thumbnail.jpg"
            alt="Cover of Annual Report"
            className="mb-3"
          />
          <Download label={content.downloadLabel} theme="light" />
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 md:left-[-100px] md:bottom-[-200px] lg:left-[-170px] lg:bottom-[-270px] w-[320px] h-[320px] md:w-[520px] md:h-[520px] lg:w-[720px] lg:h-[720px] mix-blend-hard-light rotate-45">
        <rect fill="#004996" width="720" height="720" />
      </svg>
      <svg className="absolute top-0 right-0 md:top-0 md:right-0 lg:top-[-222px] lg:right-[-110px] w-[220px] h-[220px] md:w-[400px] md:h-[400px] lg:w-[620px] lg:h-[620px] mix-blend-hard-light rotate-45">
        <rect fill="#230A59" width="620" height="620" />
      </svg>
    </section>
  )
}

export default Hero
