import * as React from "react"
import { Link } from "gatsby"

import Logo from "../../images/genuit-logo_white.svg"

const Header = ({ siteTitle }) => (
  <header className="absolute top-0 w-full h-22 bg-royal-blue-alpha flex justify-between">
    <Link to="/">
      <img alt="logo" src={Logo} className="w-24" />
    </Link>
    <h1>{siteTitle}</h1>
  </header>
)

export default Header
