import React from "react"
import cx from "classnames"

import Paragraph from "../common/Paragraph"

function Download({ label, theme = "light", className }) {
  return (
    <div className={`flex max-w-[184px] ${className ? className : ""}`}>
      <svg
        className={cx(
          "w-10 h-10 mr-2",
          theme === "dark" ? "text-royal-blue" : "text-white"
        )}
        width="21"
        height="21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M3 16h15v2H3z" />
        <path
          d="M16.864 5.364 10.5 11.728 4.136 5.364"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>

      <Paragraph
        size="small"
        colour={theme === "dark" ? "midnight-purple" : "white"}
        className="underline md:pr-4 lg:pr-10"
      >
        {label}
      </Paragraph>
    </div>
  )
}

export default Download
