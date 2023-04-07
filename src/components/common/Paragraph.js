import React from "react"
import cx from "classnames"

function Paragraph({ children, size, colour = "black", className }) {
  switch (size) {
    case "base":
    default:
      return (
        <p
          className={cx(
            "font-poppins font-regular text-base md:text-md",
            `text-${colour}`,
            `${className}`
          )}
        >
          {children}
        </p>
      )
    case "small":
      return (
        <p
          className={cx(
            "font-poppins font-semibold text-sm",
            `text-${colour}`,
            `${className}`
          )}
        >
          {children}
        </p>
      )
  }
}

export default Paragraph
