import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "./header"
import Footer from "./footer"

function ProductTitle(props) {
  const title = props.title
  return (
    <div>
      <h1>{title}</h1>
      {/* <Link to="/screens/product" className="parents-page">
            Products
          </Link> */}
    </div>
  )
}

export default ProductTitle
