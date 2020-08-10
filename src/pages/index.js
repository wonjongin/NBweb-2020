import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.css"
import Header from "./common/header"
import Footer from "./common/footer"
import Intro from "../video/intro.mp4"
import AboutIcon from "../img/product/about.svg"
import DesignIcon from "../img/product/design.svg"
import GameIcon from "../img/product/game.svg"
import WebIcon from "../img/product/web.svg"
import AppIcon from "../img/product/phone.svg"

function Product(props) {
  const imgname = props.imgname
  const toPath = "/screens/" + props.toPath
  return (
    <div className="contents">
      <Link to={toPath}>
        <img className="main-icons" src={imgname} alt={imgname} />
      </Link>
    </div>
  )
}

function Home() {
  return (
    <div>
      <Header />
      <div className="contents">
        <div>
          <div className="video">
            <video muted autoPlay loop>
              <source src={Intro} type="video/mp4" />
              <strong>Video</strong>
            </video>
            <div className="titlebox">
              <h1 className="title" id="maintitle">
                NanoByte
              </h1>
            </div>
          </div>
          <div className="background-main1">
            <div className="global-margin">
              <div className="main">
                <div className="text">
                  <h2>Products</h2>
                  <p>NanoByte의 여러 제품을 만나보세요!!</p>
                  <p>
                    여러가지 유용한 앱과 웹은 물론 재미있는 게임까지 준비되어
                    있고
                  </p>
                  <p>여러가지 멋진 일러스트와 3D 디자인까지 있어요!</p>
                </div>

                <div className="mainbutton-grid">
                  <Product imgname={AppIcon} toPath="app" />
                  <Product imgname={GameIcon} toPath="game" />
                  <Product imgname={WebIcon} toPath="web" />
                  <Product imgname={DesignIcon} toPath="design" />
                  {/* <Product imgname={HardwareIcon} toPath="hardware"/> */}
                  <Product imgname={AboutIcon} toPath="about/about" />
                </div>
              </div>

              {/* <div id="mainbutton">
              <Link className="link" to="/screens/introduction">
                <span className="button">소개보기</span>
              </Link>
              <Link className="link " to="/screens/product">
                <span className="button">제품보기</span>
              </Link>
            </div> */}
            </div>
          </div>

          <br />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home
