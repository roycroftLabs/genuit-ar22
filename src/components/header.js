import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/genuit-logo_white.svg"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">{siteTitle}</Link>
    <img alt="logo" src={Logo} />
  </header>
)

export default Header
