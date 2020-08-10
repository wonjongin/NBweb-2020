import React from "react"
import logo from "../../img/NBlogo-nobg-white.png"
import { Link } from "gatsby"
import "./footer.css"

function Footer() {
  return (
    <div>
      <footer className="footer">
        {/* <ul className="verticalmenu">
          <li>Menu</li>
          <li>bye</li>
        </ul> */}
        <div className="description">
          <p className="footer-title">NanoByte</p>
          <p>
            <Link to="/screens/about/about" className="footer-link">
              about...
            </Link>
          </p>
          <p>Ver. 0.0.3</p>
          <a href="mailto:teamforapplication@gmail.com">
            <p>Email. teamforapplication@gmail.com</p>
          </a>
          <p>Published date. 2020-08-09</p>
          <p>Copyright ⓒ 2020. Won Jongin All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
