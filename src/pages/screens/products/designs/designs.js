import React from "react"
import { Link } from "gatsby"
import "../../../../styles/global.css"
import Header from "../../../common/header"
import Footer from "../../../common/footer"
import ProductTitle from "../../../common/productTitle"
import List from "../../list"

function App(){
  return(
    <div>
      <Header/>
      <div className="global-margin">
        <ProductTitle title="3D Designs" />
        <List
          title="USB SD 꽂이"
          desc="USB와 SD카드를 편리하게 정리 할 수 있습니다!"
          link="http://nanobyte.iptime.org/download/stl/SPOILER_USB_SD.stl"
        />
      </div>  
      <Footer/>
    </div>
  );
}
export default App;