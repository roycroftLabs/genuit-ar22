import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import CutCornerBox from "../common/CutCornerBox"
import Heading from "../common/Heading"
import Paragraph from "../common/Paragraph"
import Section from "../common/Section"
import Download from "../common/Download"

import Customers from "../../images/icons/icon-customer.svg"
import Shareholders from "../../images/icons/icon-shareholders.svg"
import Employees from "../../images/icons/icon-employees.svg"
import Suppliers from "../../images/icons/icon-suppliers.svg"
import Communities from "../../images/icons/icon-communitiesenvironment.svg"

const renderIcon = name => {
  switch (name) {
    case "Customers":
    default:
      return <img src={Customers} alt={name} className="w-20" />
    case "Shareholders":
      return <img src={Shareholders} alt={name} className="w-20" />
    case "Employees":
      return <img src={Employees} alt={name} className="w-20" />
    case "Suppliers":
      return <img src={Suppliers} alt={name} className="w-20" />
    case "Communities":
      return <img src={Communities} alt={name} className="w-20" />
  }
}

function BusinessModel({ content }) {
  return (
    <Section heading={content.heading} subHeading={content.subHeading}>
      <CutCornerBox>
        <Heading level="h4" className="uppercase pb-10" colour="black">
          {content.ourResources.heading}
        </Heading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {content.ourResources.list.map((item, i) => {
            return (
              <div key={i} className="flex flex-col">
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
        <div className="w-full md:w-10/12 lg:w-1/2 block mx-auto mb-10 lg:mb-20">
          <StaticImage
            src="../../images/circular-diagram_business-model.png"
            alt="Diagram representing a sustainable business model"
            className=""
          />
        </div>
        <Heading level="h4" className="uppercase pb-10" colour="black">
          {content.stakeholderValue.heading}
        </Heading>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:mb-20">
          {content.stakeholderValue.list.map((item, i) => {
            return (
              <div key={i} className="flex flex-col">
                {renderIcon(item.icon)}
                <Heading level="h4" className="">
                  {item.heading}
                </Heading>
                <Paragraph>{item.description}</Paragraph>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center mb-10 lg:mb-20">
          <Download
            label={content.download.label}
            fileName={content.download.name}
            theme="dark"
          />
        </div>
      </CutCornerBox>
    </Section>
  )
}

export default BusinessModel
