import React from "react"
import Section from "../common/Section"
import Banner from "../common/Banner"

function BuiltEnvironmentBanner({ content }) {
  return (
    <Section fullWidth>
      <Banner content={content} />
    </Section>
  )
}

export default BuiltEnvironmentBanner
