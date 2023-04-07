import React from "react"
import cx from "classnames"

function Heading({ children, level, colour = "royal-blue", className }) {
  switch (level) {
    case "h1":
      return (
        <h1
          className={cx(
            "font-poppins font-regular text-5xl md:text-7xl",
            `text-${colour}`,
            `${className}`
          )}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2
          className={cx(
            "font-poppins font-regular text-3xl md:text-6xl",
            `text-${colour}`,
            `${className}`
          )}
        >
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3
          className={cx(
            "font-poppins font-regular text-xl md:text-5xl",
            `text-${colour}`,
            `${className}`
          )}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={cx(
            "font-poppins font-bold text-base md:text-2xl leading-tight",
            `text-${colour}`,
            `${className}`
          )}
        >
          {children}
        </h4>
      )
    default:
    case "h5":
      return (
        <h5
          className={cx(
            "font-poppins font-medium text-base md:text-2xl",
            `text-${colour}`,
            `${className}`
          )}
        >
          {children}
        </h5>
      )
  }
}

export default Heading
