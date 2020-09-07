import React from "react"

function List(props) {
  return (
    <div>
      <a href={props.link} className="product-link">
        <br />
        <div>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </a>
    </div>
  )
}
export default List
