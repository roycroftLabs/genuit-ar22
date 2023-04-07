import React from "react"
import Heading from "../common/Heading"

function Banner({ content }) {
  return (
    <section className="bg-royal-blue bg-banner-sustainable bg-no-repeat bg-cover overflow-hidden h-[450px] md:h-[550px] lg:h-[680px] py-4 md:py-10 relative">
      <div className="container flex flex-col justify-between h-full relative z-10">
        <Heading
          level="h1"
          colour="white"
          className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12"
        >
          {content.heading}
        </Heading>
        <Heading
          level="h4"
          colour="white"
          className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12"
        >
          {content.subHeading}
        </Heading>
      </div>
      <svg
        className="absolute 
      left-[-90px] bottom-[-130px] 
      md:left-[-60px] md:bottom-[-130px] 
      lg:left-[-200px] lg:bottom-[-210px] 
      xl:left-[-280px] xl:bottom-[-300px] 

      w-[480px] h-[480px] 
      md:w-[600px] md:h-[600px] 
      lg:w-[800px] lg:h-[800px] 
      xl:w-[1000px] xl:h-[1000px] 
      mix-blend-hard-light rotate-45"
      >
        <rect fill="#004996" width="1000" height="1000" />
      </svg>
    </section>
  )
}

export default Banner
