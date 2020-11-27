import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "../common/header"
import Footer from "../common/footer"
import ProductTitle from "../common/productTitle"
import List from "./list"

function Design() {
  return (
    <div>
      <Header />
      <div className="global-margin">
        <ProductTitle title="Designs" />

        <List
          title="3D 디자인"
          desc="다양한 3D디자인을 만나보세요"
          link="/main/screens/products/designs/designs/"
        />
        <List
          title="일러스트 디자인"
          desc="다양한 일러스트를 만나보아요"
          link="http://nanobyte.iptime.org/404/"
        />
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
