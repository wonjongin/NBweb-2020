import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "../common/header"
import Footer from "../common/footer"
import ProductTitle from "../common/productTitle"

function Hardware() {
  return (
    <div>
      <Header />
      <div className="global-margin">
        <ProductTitle title="Hardwares" />
        <a
          href="http://nanobyte.iptime.org/store-pc/index.php?id=%EB%98%A5%ED%94%BC%ED%95%98%EA%B8%B0%EB%A0%88%EC%A0%84%EB%93%9C"
          className="product-link"
        >
          <br />
          <div>
            <h2>아직 제품이 없어요</h2>
            <p>아직 제품이 없어요</p>
          </div>
        </a>
        <br />
        <a
          href="http://nanobyte.iptime.org/todo-flutter/"
          className="product-link"
        >
          <div>
            <h2 className="plan">출시 예정</h2>
            <p className="plan">빌드 중...</p>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Hardware
