import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "../common/header"
import Footer from "../common/footer"
import ProductTitle from "../common/productTitle"
import List from "./list"

function App() {
  return (
    <div>
      <Header />
      <div className="global-margin">
        <ProductTitle title="Apps" />
        <List
          title="Todo"
          desc="손쉽게 할 일을 관리 하세요"
          link="http://nanobyte.iptime.org/todo-flutter/"
        />
        <List
          title="Todo-cli"
          desc="CLI에서 손쉽게 할 일을 관리 하세요"
          link="http://nanobyte.iptime.org/todo-flutter/"
        />
        <List
          title="여기가 어디지?"
          desc="여긴 어디? 나는 누구? 여기가 어딘지 알고 싶을 떄 사용하세요!"
          link="http://nanobyte.iptime.org/store-m/index.php?id=%EC%97%AC%EA%B8%B0%EA%B0%80%20%EC%96%B4%EB%94%94%EC%A7%80?"
        />
        <br />
        <a href="http://nanobyte.iptime.org/store-m/" className="product-link">
          <div>
            <h2 className="plan">다른 앱들</h2>
            <p className="plan">개발중...</p>
          </div>
        </a>
        <br />
        <a href="http://nanobyte.iptime.org/store-m/" className="product-link">
          <div>
            <h2 className="plan">초이스 머신</h2>
            <p className="plan">개발중...</p>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default App
