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
          title="FB messenger"
          desc="페메 클라이언트로 PC에서도 페메를 즐기세요!!"
          link="https://github.com/wonjongin/FBmessenger-2020/releases"
        />
        <List
          title="Todo-cli"
          desc="CLI에서 손쉽게 할 일을 관리 하세요"
          link="https://github.com/wonjongin/todojs-2020"
        />
        <List
          title="cyper"
          desc="암호로 이야기 하고 싶다면?? 최고의 보안 시스템으로 암호화, 복호화 해봐요!!"
          link="https://github.com/wonjongin/cyperjs-2020"
        />
        <List
          title="여기가 어디지?"
          desc="여긴 어디? 나는 누구? 여기가 어딘지 알고 싶을 떄 사용하세요!"
          link="http://nanobyte.iptime.org/store-m/index.php?id=%EC%97%AC%EA%B8%B0%EA%B0%80%20%EC%96%B4%EB%94%94%EC%A7%80?"
        />
        <List
          title="Todo"
          desc="손쉽게 할 일을 관리 하세요"
          link="http://nanobyte.iptime.org/todo-flutter/"
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
