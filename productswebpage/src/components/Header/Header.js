import React from 'react'
import logo from './../../assets/navbar-brand.png'


function Header() {
  return (
    <div>
        <img src={logo}  alt="logo here" />
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
        <span>
          <img  alt="login button"/>

        </span>
    </div>
  )
}

export default Header