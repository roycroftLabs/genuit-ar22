import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Banner from "./Banner"
import Download from "./Download"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

function Footer({ content }) {
  return (
    <footer>
      <Banner bgOnly>
        <div className="container h-full flex flex-col justify-between">
          <div>
            <Heading level="h4" colour="white" className="pb-14">
              {content.heading}
            </Heading>
            <div className="flex flex-col md:flex-row mb-20">
              <div className="w-full md:w-6/12">
                <StaticImage
                  src="../../images/thumbnails/report-download-thumbnail.jpg"
                  alt="Cover of Annual Report"
                  className="mb-3 drop-shadow-black w-4/5"
                />
              </div>
              <div className="w-full md:w-6/12 flex flex-col md:flex-row gap-x-28">
                {content.reports.map((section, i) => {
                  return (
                    <div>
                      <Heading level="h4" colour="white" className="mb-4">
                        {section.category}
                      </Heading>
                      {section.files.map((file, i) => {
                        return (
                          <Download
                            label={file.title}
                            filePath={file.path}
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
            <Paragraph colour="white">
              © {new Date().getFullYear()} Genuit Group. All rights reserved.
            </Paragraph>
            <Paragraph colour="white">
              Designed and produced by Luminous
            </Paragraph>
          </div>
        </div>
      </Banner>
    </footer>
  )
}

export default Footer
