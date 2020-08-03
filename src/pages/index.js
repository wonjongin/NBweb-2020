import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.css"
import Header from "./common/header"
import Footer from "./common/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="contents">
        <div>
          <p>
            <h1 className="title">NanoByte</h1>
          </p>
          <div id="mainbutton">
            <Link className="link" to="/screens/introduction">
              <span className="button">소개보기</span>
            </Link>
            <Link className="link " to="/screens/product">
              <span className="button">제품보기</span>
            </Link>
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  )
}
