import React from "react"
import cx from "classnames"

import Heading from "../common/Heading"
import QuoteMarks from "../common/icons/QuoteMarks.js"

function Banner({
  content,
  slider = false,
  hide,
  bgOnly = false,
  splitHeading = false,
  fullHeight = false,
  children,
}) {
  return (
    <section
      className={cx(
        "bg-royal-blue bg-no-repeat bg-cover overflow-hidden w-full py-4 md:py-10 bg-center",
        content?.background && content.background,
        !slider && "relative h-[490px] md:h-[550px] lg:h-[680px]",
        slider && "relative h-[490px] md:h-[550px] lg:h-[680px]",
        hide && "opacity-0",
        fullHeight && "h-full"
      )}
    >
      <div className="relative z-10 h-full">
        {bgOnly ? (
          children
        ) : (
          <div className="container flex flex-col justify-between h-full">
            <>
              <div>
                {content.eyebrow && (
                  <Heading
                    level="h4"
                    colour="white"
                    className="w-full sm:w-12/12 md:w-8/12 lg:w-6/12 mb-2"
                  >
                    {content.eyebrow}
                  </Heading>
                )}
                {content.heading && !splitHeading && (
                  <Heading
                    level="h1"
                    colour="white"
                    className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12"
                  >
                    {content.heading}
                  </Heading>
                )}
                {content.heading && splitHeading && (
                  <Heading
                    level="h1"
                    colour="white"
                    className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12"
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: content.heading }}
                    />
                  </Heading>
                )}
              </div>

              <div className="flex flex-col justify-end">
                {content.subHeading && (
                  <Heading
                    level="h4"
                    colour="white"
                    className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12"
                  >
                    {content.subHeading}
                  </Heading>
                )}
                {content.quote && (
                  <>
                    <span className="block w-12 mb-4 text-white quote-wrapper">
                      <QuoteMarks />
                    </span>
                    <Heading
                      level="h4"
                      colour="white"
                      className="w-full sm:w-10/12 lg:w-8/12 xl:w-6/12 mb-4"
                    >
                      {content.quote.statement}
                    </Heading>
                    <Heading
                      level="h5"
                      colour="white"
                      className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12"
                    >
                      {content.quote.author}
                    </Heading>
                  </>
                )}
              </div>
            </>
          </div>
        )}
      </div>
      <svg
        className="absolute 
      left-[-90px] bottom-[-90px] 
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
