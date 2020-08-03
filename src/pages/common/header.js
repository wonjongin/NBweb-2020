import React from "react"
import logo from "../../img/NBlogo-nobg-white.png"
import { Link } from "gatsby"
import "./header.css"

function Header() {
  return (
    <div className="header">
      <Link to="/" className="NB">
        <img src={logo} alt="NBlogo-nobg" className="logo" />

        <span className="organname">NanoByte</span>
      </Link>
      <span className="right-item">
        <ul type="none">
          <li>
            <Link className="link-header" to="/screens/introduction">
              Introduction
            </Link>
          </li>
          <li>
            <Link className="link-header" to="/screens/product">
              Products
            </Link>
          </li>
          <li>
            <Link className="link-header" to="/screens/member">
              Member
            </Link>
          </li>
        </ul>
      </span>
    </div>
  )
}

export default Header
