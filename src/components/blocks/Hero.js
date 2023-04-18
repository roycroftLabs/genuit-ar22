import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Heading from "../common/Heading"
import Download from "../common/Download"

function Hero({ content }) {
  return (
    <section className=" w-full h-[810px] 3xl:h-[950px] bg-royal-blue bg-hero bg-center bg-no-repeat bg-cover overflow-hidden mb-20">
      <div className="container grid grid-rows-2 h-full py-10">
        <div className="relative row-start-2 w-2/3 md:w-2/5 lg:w-1/3 4xl:w-1/4 self-end">
          <Heading level="h1" colour="white" className="relative z-10">
            {content.heading}
          </Heading>
          <svg
            className="absolute -z-1 mix-blend-hard-light rotate-45
      w-[360px] h-[360px] 
      md:w-[600px] md:h-[600px] 
      lg:w-[720px] lg:h-[720px] 
      3xl:w-[950px] 3xl:h-[950px]
      
      bottom-[-140px] left-[-80px] 
      md:bottom-[-310px] md:left-[-220px] 
      lg:bottom-[-320px] lg:left-[-290px] 
      3xl:bottom-[-540px] 3xl:left-[-290px] 
      "
          >
            <rect fill="#004996" width="720" height="720" />
          </svg>
        </div>
        <div className="relative row-start-1 w-2/5 sm:w-4/12 lg:w-3/12 xl:w-2/12 flex flex-col items-end justify-self-end pt-20">
          <StaticImage
            src="../../images/thumbnails/report-download-thumbnail.jpg"
            alt="Cover of Annual Report"
            className="mb-3 z-10"
          />
          <Download
            label={content.download.label}
            fileName={content.download.name}
            downloadName={content.download.fullName}
            theme="light"
            className="z-10"
          />
          <svg
            className="absolute -z-1 mix-blend-hard-light rotate-45
              top-[-30px] right-[-140px] 
              md:top-[-232px] md:right-[-230px] 
              3xl:top-[-232px] 3xl:right-[-200px] 
              w-[380px] h-[380px] 
              md:w-[560px] md:h-[560px]
              3xl:w-[760px] 3xl:h-[760px]"
          >
            <rect fill="#230A59" width="620" height="620" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
