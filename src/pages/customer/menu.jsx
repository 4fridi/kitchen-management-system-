import React from 'react'
import './index.css'
import './menu.css'
import {Link} from 'react-router-dom'

function Menu () {

  return (
    <>
    <div className="main">
         <div className="navbar">
              <div className="left-nav">
                 <img src="./abd.jpeg" className="logo" alt="Avatar"/>
                 <Link to="/"><a>Kais's Kitchen</a></Link>
              </div>
        
              <div className="right-nav">
                 <Link to="/about_us"><a>About us</a></Link>
                 <Link to="/contact"><a>Contact</a></Link>
                 <Link to="/menu"><a>Menu</a></Link>
                 <Link to="/help"><a>Help</a></Link>   
              </div>
        </div>
        <h1>  <h1> ------------------------------------Menu-----------------------------------</h1></h1>
        <button className='sub-of-sign'>BUY</button>


        </div>
    </>
  )
}

export default Menu
