import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "../common/header"
import Footer from "../common/footer"
import ProductTitle from "../common/productTitle"

function Game() {
  return (
    <div>
      <Header />
      <div className="global-margin">
        <ProductTitle title="Games" />
        <a
          href="http://nanobyte.iptime.org/store-pc/index.php?id=%EB%98%A5%ED%94%BC%ED%95%98%EA%B8%B0%EB%A0%88%EC%A0%84%EB%93%9C"
          className="product-link"
        >
          <br />
          <div>
            <h2>똥피하기 레전드</h2>
            <p>하늘에서 떨어지는 똥을 피하세요</p>
          </div>
        </a>
        <a
          href="http://nanobyte.iptime.org/store-pc/index.php?id=%EC%97%85%EB%8B%A4%EC%9A%B4%EA%B2%8C%EC%9E%84"
          className="product-link"
        >
          <br />
          <div>
            <h2>업다운 게임</h2>
            <p>CLI에서 업다운 게임을 즐겨봐요!!</p>
          </div>
        </a>
        <br />
        <a href="http://nanobyte.iptime.org/store-pc/" className="product-link">
          <div>
            <h2 className="plan">다른 게임들...</h2>
            <p className="plan">출시 예정</p>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Game
