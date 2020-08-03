import React from "react"
import { Link } from "gatsby"
import "../../../styles/global.css"
import Header from "../../common/header"
import Footer from "../../common/footer"

function Web() {
  return (
    <div>
      <Header />
      <div className="contents">
        <h1>
          <Link to="/screens/product" className="parents-page">
            Products
          </Link>
          /Web Apps
        </h1>
        <a href="http://nanobyte.iptime.org:32768" className="product-link">
          <br />
          <div>
            <h2>NB WIKI</h2>
            <p>나노바이트의 위키사이트!</p>
          </div>
        </a>
        <a
          href="http://nanobyte.iptime.org/webapps/blindbox"
          className="product-link"
        >
          <br />
          <div>
            <h2>숫자 뽑기</h2>
            <p>선택하기가 어려울 때 숫자를 뽑아봐요</p>
          </div>
        </a>
        <a
          href="http://nanobyte.iptime.org/calc/index.php?id=%EC%82%BC%EA%B0%81%ED%95%A8%EC%88%98"
          className="product-link"
        >
          <br />
          <div>
            <h2>삼각함수 계산기</h2>
            <p>삼각함수를 계산하세요</p>
          </div>
        </a>

        <br />
        <a href="http://nanobyte.iptime.org/store-pc/" className="product-link">
          <div>
            <h2 className="plan">다른 웹 앱들...</h2>
            <p className="plan">출시 예정</p>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Web
