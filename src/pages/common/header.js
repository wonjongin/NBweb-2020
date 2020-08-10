import React from "react"
import logo from "../../img/NBlogo-nobg-white.png"
import { Link } from "gatsby"
import "./header.css"

function Items(props) {
  const path = "/screens/" + props.fname
  return (
    // <li>
    <Link className="link-header" to={path}>
      {props.title}
    </Link>
    // </li>
  )
}
function Header() {
  return (
    <div className="header">
      <head>
        <meta name="theme-color" content="#3E4FD5" />
      </head>
      <Link to="/" className="NB">
        <img src={logo} alt="NBlogo-nobg" className="logo" />

        <span className="organname">NanoByte</span>
      </Link>
      <span className="right-item">
        {/* <ul type="none"> */}
        <div className="header-grid">
          <Items title="App" fname="app" />
          <Items title="Game" fname="game" />
          <Items title="Web" fname="web" />
          <Items title="Design" fname="design" />
          {/* <Items title="Hardware" fname="hardware" /> */}
        </div>

        {/* </ul> */}
      </span>
    </div>
  )
}

export default Header
