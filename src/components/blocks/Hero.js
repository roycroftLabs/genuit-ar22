import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Heading from "../common/Heading"
import Download from "../common/Download"

function Hero({ content }) {
  return (
    <section className="relative w-full h-[810px] bg-royal-blue bg-hero bg-center bg-no-repeat bg-cover overflow-hidden mb-20">
      <div className="container grid grid-rows-2 h-full py-10">
        <Heading
          level="h1"
          colour="white"
          className="row-start-2 w-4/5 md:w-2/5 lg:w-1/3 z-10 relative self-end"
        >
          {content.heading}
        </Heading>
        <div className="row-start-1 w-2/5 sm:w-4/12 lg:w-3/12 xl:w-2/12 flex flex-col items-end justify-self-end pt-20 z-10">
          <StaticImage
            src="../../images/thumbnails/report-download-thumbnail.jpg"
            alt="Cover of Annual Report"
            className="mb-3"
          />
          <Download
            label={content.download.label}
            fileName={content.download.name}
            theme="light"
          />
        </div>
      </div>
      <svg
        className="absolute 
      bottom-[-60px] left-[-100px] 
      sm:bottom-[-140px] sm:left-[-100px] 
      md:bottom-[-200px] md:left-[-100px] 
      lg:bottom-[-270px] lg:left-[-170px] 
      w-[360px] h-[360px] 
      sm:w-[450px] sm:h-[450px] 
      md:w-[520px] md:h-[520px] 
      lg:w-[720px] lg:h-[720px] mix-blend-hard-light rotate-45"
      >
        <rect fill="#004996" width="720" height="720" />
      </svg>
      <svg
        className="absolute 
      top-[-30px] right-[-140px] 
      sm:top-[-80px] sm:right-[-50px] 
      md:top-[-90px] md:right-[-170px] 
      lg:top-[-222px] lg:right-[-110px] 
      w-[380px] h-[380px] 
      sm:w-[420px] sm:h-[420px] 
      md:w-[500px] md:h-[500px] 
      lg:w-[620px] lg:h-[620px] mix-blend-hard-light rotate-45"
      >
        <rect fill="#230A59" width="620" height="620" />
      </svg>
    </section>
  )
}

export default Hero
