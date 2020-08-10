import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "../common/header"
import Footer from "../common/footer"
import ProductTitle from "../common/productTitle"

function Design() {
  return (
    <div>
      <Header />
      <div className="global-margin">
        <ProductTitle title="Designs" />
        <a href="http://nanobyte.iptime.org/404/" className="product-link">
          <br />
          <div>
            <h2>3D 디자인</h2>
            <p>다양한 3D디자인을 만나보세요</p>
          </div>
        </a>
        <a href="http://nanobyte.iptime.org/404" className="product-link">
          <br />
          <div>
            <h2>일러스트 디자인</h2>
            <p>다양한 일러스트를 만나보아요</p>
          </div>
        </a>
        <br />
        <a href="http://nanobyte.iptime.org/store-m/" className="product-link">
          <div>
            <h2 className="plan">다른 디자인들</h2>
            <p className="plan">그려지는 중...</p>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Design
