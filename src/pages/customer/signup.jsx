import React from 'react'
import './index.css'
import './signup.css'
import {Link} from 'react-router-dom'


function Signup () {

    return(
        <>

        <div className='main'>

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

        <div className='sin-head'>
        <h1>Sign Up</h1>
        </div>


         <div className="signup-form">
           
         
                <label>Username :</label>
                <input type="text" name="username" required placeholder="Full Name"/>
                <br/>
                <label>Password :</label>
                <input type="password" name="password" required placeholder="Password"/>
                <br/>
                <label>Phone Number :</label>
                <input type="text" name="phone" required placeholder="Phone Number"/>
                <br/>
                <label>Email Address :</label>
                <input type="text" name="email" required placeholder="Email Address"/>
                <br/><br/>
                <br/><br/>
               <button className='sub-of-sign'>
                   Submit
                   </button><br/><br/>
        </div>
  
        <div className='foot-sig'>
            <div>
        <h1>Email Address</h1>
         <p> babakitchen70@gmail.com</p>
            </div>
            <div>
            <h1>Visit Us</h1>
                    <p>Lane Number 9, nr. Ashoka Summith, Saibaba Nagar, Kondhwa, Pune, Maharashtra 411048</p>
           </div>
            <div>
            <h1>Phone</h1>
                    <p>+91 98222 95811 , <br/> <br/>+91 7720039105</p>
            </div>
        </div>

        </div> 
        </>
    )
}

export default Signup