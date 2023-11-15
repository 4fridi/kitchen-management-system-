import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function Help () {

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

       

        <div class="contact-c">
        <div class="card">
        <h1><h1>-------------------------------HELP DESK------------------------------</h1></h1>
            <p>
                Welcome to <a href='/'>Baba Kitchen</a>, where you can
                easily log in and
                order
                our
                delicious special food from the comfort of your own home. To get started, click the "<a href='signup/'>Sign Up</a>" or
                "<a href='signup/'>Create
                Account</a>" button at the top right corner of the homepage. Provide your name, email address, phone
                number,
                and create a strong password for your account. After agreeing to our terms and conditions, check
                your
                email for a verification link, and click on it to confirm your email address.
            </p>
            <p>
                Once you've created your account, return to the homepage and click on "<a href='login/'>Log In</a>" or "<a href='signup/'>Sign In</a>." Enter
                your
                email address and password, then click "<a href='login/'>Log In</a>" to access your account. Now that you're logged in,
                explore our menu by clicking on the "<a href='menu/'>Menu</a>" or "Order Now" tab. Use the categories and filters to
                find
                dishes that match your preferences, and click on a specific item to view detailed descriptions,
                images,
                and prices.
            </p>
            <p>
                To place an order, simply click "Add to Cart" for the items you want. You can review your selections
                by
                clicking the shopping cart icon and adjust quantities, remove items, or add special instructions.
                When
                you're ready, proceed to checkout. Enter your delivery address and payment information, select your
                preferred delivery or pickup options, and click "Place Order" to finalize your purchase. You'll
                receive
                an email confirmation with order details, estimated delivery time, and a receipt. If available, you
                can
                also track your order in real-time through our website. Thank you for choosing us for your culinary
                delights, and enjoy your meal! If you have any questions or encounter any issues, please don't
                hesitate
                to reach out to our customer support team for assistance.
            </p>
        </div><br/>
    </div>
    </div>  
    </>
  )
}

export default Help
