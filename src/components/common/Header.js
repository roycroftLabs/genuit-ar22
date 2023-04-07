import * as React from "react"
import { Link } from "gatsby"

import Paragraph from "./Paragraph"

import Logo from "../../images/genuit-logo_white.svg"

const Header = ({ siteTitle }) => (
  <header className="absolute top-0 w-full h-22 bg-royal-blue-alpha z-10">
    <div className="container flex justify-between items-center h-full">
      <Link to="/">
        <img alt="logo" src={Logo} className="h-[44px]" />
      </Link>
      <Paragraph colour="white">{siteTitle}</Paragraph>
    </div>
  </header>
)

export default Header
