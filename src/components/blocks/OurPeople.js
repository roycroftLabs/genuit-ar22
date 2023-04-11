import React from "react"
import Banner from "../common/Banner"
import Section from "../common/Section"

function OurPeople({ content }) {
  return (
    <Section
      heading={content.heading}
      subHeading={content.subHeading}
      fullWidth
    >
      <Banner content={content.banner} />
    </Section>
  )
}

export default OurPeople
