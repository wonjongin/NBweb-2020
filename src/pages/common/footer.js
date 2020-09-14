import React from "react"
import logo from "../../img/NBlogo-nobg-white.png"
import { Link } from "gatsby"
import "./footer.css"

function PublishedDate() {
  // let today = new Date()
  // let year = today.getFullYear()
  // let month = today.getMonth() + 1
  // let date = today.getDate()
  // let minute = today.getMinutes()
  // return year + "년 " + month + "월 " + date + "일"
  return "2020년 09월 14일"
}

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
          <p>Ver. 0.0.6</p>
          <a href="mailto:teamforapplication@gmail.com">
            <p>Email. teamforapplication@gmail.com</p>
          </a>
          <p>
            Published date. <PublishedDate />
          </p>
          <p>Copyright ⓒ 2020. Won Jongin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
