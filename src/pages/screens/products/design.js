import React from "react"
import { Link } from "gatsby"
import "../../../styles/global.css"
import Header from "../../common/header"
import Footer from "../../common/footer"

function Design() {
  return (
    <div>
      <Header />
      <div className="contents">
        <h1>
          <Link to="/screens/product" className="parents-page">
            Products
          </Link>
          /Designs
        </h1>
        <a
          href="http://nanobyte.iptime.org/todo-flutter/"
          className="product-link"
        >
          <br />
          <div>
            <h2>3D 디자인</h2>
            <p>다양한 3D디자인을 만나보세요</p>
          </div>
        </a>
        <a
          href="http://nanobyte.iptime.org/store-m/index.php?id=%EC%97%AC%EA%B8%B0%EA%B0%80%20%EC%96%B4%EB%94%94%EC%A7%80?"
          className="product-link"
        >
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
