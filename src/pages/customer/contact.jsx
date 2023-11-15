import React from 'react'
import './index.css'
import './contact.css'

import {Link} from 'react-router-dom'


function Contact () {

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
           <div className="contact-c">
                <div className="card">
                    <h1>Phone</h1>
                    <p>Mobile: +91 98222 95811 </p>
                    <p>WhatsApp: +91 7720039105</p>
                </div>
         
       
                <div className="card">
                    <h1>Visit Us</h1>
                    <p>Lane Number 9, nr. Ashoka Summith, Saibaba Nagar, Kondhwa, Pune, Maharashtra 411048</p>
                </div>
           
       
                <div className="card">
                    <h1>Email</h1>
                    <p>Email Address: babakitchen70@gmail.com</p>
                </div>
              </div>  
                <br></br>
        </div>
    </>
  )
}

export default Contact
