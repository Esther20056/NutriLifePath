import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item(props) {
  return (
      <div className='item-wrapper'>
        <div className="img-wrapper">
          <Link to={`/product_display/${props.id}`}>
            <img src={props.image} className="product-image" />
          </Link>
        </div>
        <div className="details-wrapper">
          <h4 className="header-text">{props.title}</h4>
          <p className="description-text">{props.description}</p>
          <button className='details-button'><Link to={`/recentpostitems/${props.id}`}>Learn More</Link></button>
        </div>
      </div>
  )
}

export default Item