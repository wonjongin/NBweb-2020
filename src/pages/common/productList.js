import React from "react"
import { Link } from "gatsby"
import "../../styles/global.css"
import Header from "./header"
import Footer from "./footer"

function ProductList(props) {
  return (
    <div>
      <div className="global-margin">
        <a href={props.href} className="product-link">
          <br />
          <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </a>
        <br />
      </div>
    </div>
  )
}

export default ProductList
