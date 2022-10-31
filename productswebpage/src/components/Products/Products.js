import React from 'react'
import './Products.css'
import Card from './Card'

function Products() {
  return (
    <>
    <h2 className='nav-heading'>Products</h2>
    <div className="products-container">
        {/* <div className='card'>
       
        </div> */}
        <Card 
          imgSrc="./../../assets/phone.png"
          name="Apple iPhone 13 (128GB) - Blue"
          oldPrice='59999/-'
          newPrice='47999/-'
        
        />
        <Card 
         imgSrc="./../../assets/phone.png"
         name="Apple iPhone 13 (128GB) - Blue"
         oldPrice='59999/-'
         newPrice='47999/-' />
        <Card 
         imgSrc="./../../assets/phone.png"
         name="Apple iPhone 13 (128GB) - Blue"
         oldPrice='59999/-'
         newPrice='47999/-'/>
        <Card 
         imgSrc="./../../assets/phone.png"
         name="Apple iPhone 13 (128GB) - Blue"
         oldPrice='59999/-'
         newPrice='47999/-'/>
        <Card 
         imgSrc="./../../assets/phone.png"
         name="Apple iPhone 13 (128GB) - Blue"
         oldPrice='59999/-'
         newPrice='47999/-' />
    </div>
    </>
  )
}

export default Products