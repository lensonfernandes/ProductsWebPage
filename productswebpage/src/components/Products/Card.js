import React from 'react'
import './Card.css'

function Card({imgSrc, name, oldPrice, newPrice}) {
  return (
    <div className='card-item-outer'>
        <img className="img-preview"  />
        <h3 className='item-title'> {name}</h3>
        <div className='card-item-stats'>
            
            <span className='img-span'></span>

            <div>
                <p>{oldPrice}</p> <span>{newPrice}</span>
            </div>
        </div>
        <button className='add-button'>ADD TO CART</button>  


    </div>
  )
}

export default Card