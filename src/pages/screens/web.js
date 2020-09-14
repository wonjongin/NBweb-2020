import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "../common/header"
import Footer from "../common/footer"
import ProductTitle from "../common/productTitle"
import List from "./list"

function Web() {
  return (
    <div>
      <Header />
      <div className="global-margin">
        <ProductTitle title="Web Apps" />
        <List
          title="NB WIKI"
          desc="나노바이트의 위키사이트!"
          link="http://nanobyte.iptime.org:32768"
        />
        <List
          title="숫자 뽑기"
          desc="선택하기가 어려울 때 숫자를 뽑아봐요"
          link="http://nanobyte.iptime.org/webapps/blindbox"
        />
        <List
          title="삼각함수 계산기"
          desc="삼각함수를 계산하세요"
          link="http://nanobyte.iptime.org/calc/index.php?id=%EC%82%BC%EA%B0%81%ED%95%A8%EC%88%98"
        />

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
