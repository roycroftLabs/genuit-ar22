import React from "react"
import cx from "classnames"

function Heading({ children, level, colour = "royal-blue", className }) {
  switch (level) {
    case "h1":
      return (
        <h1
          className={cx(
            "font-poppins font-regular antialiased text-5xl sm:text-6xl lg:text-7xl leading-tight",
            `text-${colour}`,
            className && className
          )}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2
          className={cx(
            "font-poppins font-regular antialiased text-3xl md:text-5xl xl:text-6xl leading-tight",
            `text-${colour}`,
            className && className
          )}
        >
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3
          className={cx(
            "font-poppins font-regular antialiased text-xl md:text-3xl lg:text-4xl leading-snug",
            `text-${colour}`,
            className && className
          )}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={cx(
            "font-poppins font-bold antialiased text-base md:text-2xl leading-snug",
            `text-${colour}`,
            className && className
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
            "font-poppins font-medium antialiased text-base md:text-2xl",
            `text-${colour}`,
            className && className
          )}
        >
          {children}
        </h5>
      )
  }
}

export default Heading
