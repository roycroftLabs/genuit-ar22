import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import CutCornerBox from "../common/CutCornerBox"
import Heading from "../common/Heading"
import Paragraph from "../common/Paragraph"
import Section from "../common/Section"
import Download from "../common/Download"

function BusinessModel({ content }) {
  return (
    <Section heading={content.heading} subHeading={content.subHeading}>
      <CutCornerBox>
        <Heading level="h4" className="uppercase pb-10" colour="black">
          {content.ourResources.heading}
        </Heading>
        <div className="flex gap-6 mb-20">
          {content.ourResources.list.map((item, i) => {
            return (
              <div className="flex flex-col">
                <Heading level="h4" className="uppercase">
                  {item.heading}
                </Heading>
                <Paragraph>{item.description}</Paragraph>
              </div>
            )
          })}
        </div>
        <Heading level="h4" className="uppercase pb-10" colour="black">
          {content.creatingValue.heading}
        </Heading>
        <StaticImage
          src="../../images/circular-diagram_business-model.png"
          alt="Diagram representing a sustainable business model"
          className="w-full md:w-10/12 lg:w-1/2 block mx-auto mb-20"
        />
        <Heading level="h4" className="uppercase pb-10" colour="black">
          {content.stakeholderValue.heading}
        </Heading>
        <div className="grid grid-cols-3 gap-6 mb-20">
          {content.stakeholderValue.list.map((item, i) => {
            return (
              <div className="flex flex-col">
                <Heading level="h4" className="">
                  {item.heading}
                </Heading>
                <Paragraph>{item.description}</Paragraph>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center mb-20">
          <Download label={content.downloadLabel} theme="dark" className="" />
        </div>
      </CutCornerBox>
    </Section>
  )
}

export default BusinessModel