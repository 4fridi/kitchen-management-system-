import React from 'react'
import './index.css'
import './signup.css'
import {Link} from 'react-router-dom'




function Login () {
return(
<>
<div class="main">
     
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
        <h1>Login</h1>
        </div>
                
        <div class="signup-form cont">
            
           
                <label for="username">Username:</label>
                <input type="text" name="username" required placeholder="Username"/>
                <br/>
                <label for="password">Password:</label>
                <input type="password" name="password" required placeholder="Password"/>
                <br/>
                <br/><br/>
                <button className='sub-of-sign sub'>Sign Up</button>
           <br/>
           
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

export default Login