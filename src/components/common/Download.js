import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Paragraph from "../common/Paragraph"

import FullReport from "../../documents/Genuit_AR22_full-interactive.pdf"
import StrategyReport from "../../documents/Genuit_AR22_Strategy.pdf"
import GovernanceReport from "../../documents/Genuit_AR22_Governance_report.pdf"
import FinancialReport from "../../documents/Genuit_AR22_Financial_report.pdf"
import RemunerationReport from "../../documents/Genuit_AR22_Remuneration_report.pdf"
import BusinessModel from "../../documents/Genuit_AR22_Business_model.pdf"
import ChairStatement from "../../documents/Genuit_AR22_Chair_statement.pdf"
import CEOStatement from "../../documents/Genuit_AR22_CEO_statement .pdf"

const getFile = name => {
  switch (name) {
    case "full-report":
    default:
      return FullReport
    case "strategy":
      return StrategyReport
    case "governance":
      return GovernanceReport
    case "financial":
      return FinancialReport
    case "remuneration":
      return RemunerationReport
    case "business-model":
      return BusinessModel
    case "chair-statement":
      return ChairStatement
    case "ceo-statement":
      return CEOStatement
  }
}

function Download({
  label,
  fileName,
  dowloadName,
  theme = "light",
  className,
}) {
  return (
    <a
      href={getFile(fileName)}
      download={dowloadName}
      target="_blank"
      rel="noreferrer"
      className={`flex max-w-[190px] md:max-w-[200px] cursor-pointer ${
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
    "strategy",
    "governance",
    "financial",
    "remuneration",
    "business-model",
    "chair-statement",
    "ceo-statement",
  ]),
}
