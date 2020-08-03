import React from "react"
import "../../styles/global.css"
import Layout from "../../components/layout"
import Header from "../common/header"
import Footer from "../common/footer"

const Introduction = () => (
  <div>
    <Header />
    <div className="contents">
      <div>
        <h1>Introduction</h1>
        <p>NanoByte는 가현중학교의 정보동아리 'null'에서 시작했습니다. </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default Introduction
