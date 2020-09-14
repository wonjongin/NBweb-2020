import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "../common/header"
import Footer from "../common/footer"
import ProductTitle from "../common/productTitle"
import List from "./list"

function Game() {
  return (
    <div>
      <Header />
      <div className="global-margin">
        <ProductTitle title="Games" />
        <List
          title="똥피하기 레전드"
          desc="하늘에서 떨어지는 똥을 피하세요"
          link="http://nanobyte.iptime.org/store-pc/index.php?id=%EB%98%A5%ED%94%BC%ED%95%98%EA%B8%B0%EB%A0%88%EC%A0%84%EB%93%9C"
        />
        <List
          title="NBwar"
          desc="PVP 마인크래프트 플러그인을 즐겨봐요"
          link="https://github.com/wonjongin/NBwar"
        />
        <List
          title="업다운 게임"
          desc="CLI에서 업다운 게임을 즐겨봐요!!"
          link="https://github.com/wonjongin/updown-2020"
        />

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
