import React from "react"
import { Link } from "gatsby"
import "../../../styles/global.css"
import Header from "../../common/header"
import Footer from "../../common/footer"

function Product() {
  return (
    <div>
      <Header />
      <div className="global-margin">
        <h1>Products</h1>
        <Link className="product-link" to="/screens/products/game">
          <br />
          <div>
            <h2>Games</h2>
            <p>재미있는 게임들을 만나보세요</p>
          </div>
        </Link>
        <br />
        <Link className="product-link" to="/screens/products/app">
          <div>
            <h2>Apps</h2>
            <p>스마트폰과 컴퓨터에서 사용할 앱을 만나보세요!</p>
          </div>
        </Link>
        <br />
        <Link className="product-link" to="/screens/products/web">
          <div>
            <h2>Web Apps</h2>
            <p>다양한 웹 앱을 만나보세요!</p>
          </div>
        </Link>
        <br />
        <Link className="product-link" to="/screens/products/design">
          <div>
            <h2>Design</h2>
            <p>3D 디자인, 일러스트 디자인을 만나보세요!</p>
          </div>
        </Link>
        <br />
        <Link className="product-link" to="/screens/products/hardware">
          <div>
            <h2 className="plan">Hardware</h2>
            <p className="plan">대단한 하드웨어를 만나보세요!</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Product
