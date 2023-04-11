import React from "react"

import Banner from "./Banner"
import Download from "./Download"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

function Footer({ content }) {
  return (
    <footer>
      <Banner bgOnly>
        <div className="container h-full flex flex-col justify-between">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-6/12">
              <Heading level="h4" colour="white">
                {content.heading}
              </Heading>
            </div>
            <div className="w-full md:w-6/12 flex flex-col md:flex-row">
              {content.reports.map((section, i) => {
                return (
                  <div>
                    <Heading level="h4" colour="white" className="mb-4">
                      {section.category}
                    </Heading>
                    {section.files.map((file, i) => {
                      return <Download label={file.title} />
                    })}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full">
            <Paragraph>
              © {new Date().getFullYear()} Genuit Group. All rights reserved.
            </Paragraph>
            <Paragraph>Designed and produced by Luminous</Paragraph>
          </div>
        </div>
      </Banner>
    </footer>
  )
}

export default Footer
