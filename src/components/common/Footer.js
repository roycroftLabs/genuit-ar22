import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Banner from "./Banner"
import Download from "./Download"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

function Footer({ content }) {
  return (
    <footer>
      <Banner bgOnly fullHeight>
        <div className="container h-full flex flex-col justify-between">
          <div>
            <Heading level="h4" colour="white" className="pb-10 md:pb-14">
              {content.heading}
            </Heading>
            <div className="flex flex-col md:flex-row mb-10 md:mb-20">
              <div className="w-full md:w-6/12">
                <StaticImage
                  src="../../images/thumbnails/report-download-thumbnail.jpg"
                  alt="Cover of Annual Report"
                  className="mb-10 md:mb-3 drop-shadow-black w-11/12 md:w-4/5"
                />
              </div>
              <div className="w-full md:w-6/12 flex flex-row gap-x-4 sm:gap-x-10 md:gap-x-28">
                {content.reports.map((section, i) => {
                  return (
                    <div className="w-6/12">
                      <Heading level="h4" colour="white" className="mb-4">
                        {section.category}
                      </Heading>
                      {section.files.map((file, i) => {
                        return (
                          <Download
                            label={file.title}
                            fileName={file.name}
                            className="mb-4"
                          />
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between">
            <Paragraph colour="white">© {content.copyright}</Paragraph>
            <Paragraph colour="white">{content.credits}</Paragraph>
          </div>
        </div>
      </Banner>
    </footer>
  )
}

export default Footer
