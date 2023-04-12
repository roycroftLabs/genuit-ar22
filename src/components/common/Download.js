import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Paragraph from "../common/Paragraph"

import samplePDF from "../../documents/sample-download.pdf"

const getFile = name => {
  switch (name) {
    case "full-report":
    default:
      return samplePDF
    case "strategic":
      return samplePDF
    case "governance":
      return samplePDF
    case "financial":
      return samplePDF
    case "chair-statement":
      return samplePDF
    case "ceo-statement":
      return samplePDF
  }
}

function Download({ label, fileName, theme = "light", className }) {
  return (
    <a
      href={getFile(fileName)}
      download={label}
      target="_blank"
      rel="noreferrer"
      className={`flex max-w-[200px] cursor-pointer ${
        className ? className : ""
      }`}
    >
      <div className="mr-2 sm:mr-4">
        <svg
          className={cx(
            "w-5 h-5  hover:text-orange",
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
            strokeWidth="2"
          />
        </svg>
      </div>

      <Paragraph
        size="small"
        colour={theme === "dark" ? "midnight-purple" : "white"}
        className="underline md:pr-4 lg:pr-6"
      >
        {label}
      </Paragraph>
    </a>
  )
}

export default Download

Download.propTypes = {
  fileName: PropTypes.oneOf([
    "full-report",
    "strategic",
    "governance",
    "financial",
  ]),
}
