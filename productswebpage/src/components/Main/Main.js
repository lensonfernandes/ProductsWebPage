import React from 'react'
import './Main.css'
import mainImage from "./../../assets/main-image-girl.png"

function Main() {
  return (
    <div className='main-container'>
      <div className='m-c-left-container'>
        <h5>SUMMER 2020</h5>
        <h1>NEW COLLECTION</h1>
        <h4>We know how large objects will act, 
but things on a small scale.</h4>
        <button><h3>SHOP NOW</h3></button>
      </div>
      <div className='m-c-right-container'>
        <img src={mainImage} alt="Girl Image" />
      </div>
    </div>
  )
}

export default Main