import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo' />
        <p>Dendrophile Clothing</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr></hr>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr></hr>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}>Women{menu==="whomens"?<hr></hr>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr></hr>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=""/> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
