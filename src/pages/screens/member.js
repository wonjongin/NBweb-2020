import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "../common/header"
import Footer from "../common/footer"

function Member() {
  return (
    <div>
      <Header />
      <div className="contents">
        <h1>Members</h1>
        <h2>게임 개발부</h2>
        <ul>
          <li>김태민</li>
          <li>윤상민</li>
          <li>임진교</li>
          <li>허준혁</li>
        </ul>

        <h2>앱 개발부</h2>
        <ul>
          <li>김찬웅</li>
          <li>김현우</li>
          <li>박순형</li>
          <li>원종인</li>
        </ul>

        <h2>하드웨어 개발부</h2>
        <ul>
          <li>하승준</li>
        </ul>

        <h2>일러스트 개발부</h2>
        <ul>
          <li>하태웅</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Member
