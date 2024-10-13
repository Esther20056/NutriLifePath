import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

function RecentPostItems(props) {
  return (
     <div className="recentpostitem-container">
        <div className="recentpostimage-container">
        <img src={props.image} alt={props.title} className="item-image" />
        </div>
        <div className="item-details">
      <h4>{props.title}</h4>
      <p  className='post-p'>{props.description}</p>
      <button className='details-button'><Link to={`/recentpostitems/${props.id}`}>Read More</Link></button>
        </div>
  </div>
  )
}

export default RecentPostItems