import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'


function Index () {

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


        <div className='buttons-main'>
            <Link to='signup'>
            <button>Sign in</button> </Link>
            <Link to='login'>
            <button>Login</button> </Link>
        </div>         
       

        <div className="content-i">
            <div className="con-i">
              <h1>  <p className='data-i'>  Welcome to.....
                <h1>Baba Kitchen</h1>
                <p>Where every need is Catered !!</p><br/></p> 
                </h1>
            </div>
            <div className="image-i">
                <img src="gravy.png" height={370} width={1800}/>
            </div>
        </div>

        <button className='order-i'>Order Now</button>

        <h1><h1>SPECIALITIES</h1></h1>

    <div className="container-i">
        <div className="contentsec-i">

            <div className="dish-i">
            <div className="sp-img">
                <img src="./paneer.jpg" height={390} width={1000}/>
            </div>
            <div className='card-info'>
            <h1><h1>Chicken Seekh Biryani</h1></h1>
               <h1>Most Delicious Dish </h1>
               <h3>1200/- per KG</h3>
            </div>
            </div>

            <div className="dish-i">
            <div className="sp-img">
                <img src="./paneer.jpg" height={390} width={1000} />
            </div>
            <div className='card-info'>
           <h1><h1>Chicken malai biryani</h1></h1>
               <h1>Most selling dish of our menu</h1>
               <h3>800/- per KG</h3>
                </div>
            </div>
 

            <div className="dish-i">
            <div className="sp-img">
                <img src="./paneer.jpg" height={390} width={1000}/>
            </div>
               <div className='card-info'>
               <h1><h1>Mutton Kashmiri Biryani</h1></h1>
               <h1>
                   Best Quality of Mutton used
               </h1>
               <h3>800/- per KG </h3>
            </div>
            </div>
        </div>

        <h1><h1>Contact Info</h1></h1>

        <div className='contactin-i'>
        <div className="card-Ii">
            <div className="card-img">
                <img src="./biryani.jpg" height={250} width={370}/>
            </div>
                <h2>
                    Phone....</h2>
                <p>Mobile : +91 98222 95811<br/>WhatsApp : +91 77200 39105</p>
            </div>
           

            <div className="card-Ii">
            <div className="card-img">
                <img src="./biryani.jpg" height={250} width={570}/>
            </div>
                <h2>Visit Us....</h2>
                <p>Lane Number 9, nr. Ashoka Summith, Saibaba Nagar, Kondhwa, Pune, Maharashtra 411048</p>
            </div>
 

            <div className="card-Ii">
            <div className="card-img">
                <img src="./biryani.jpg" height={250} width={370}/>
            </div>

                <h2>Email....</h2>
                <p>Email Address : babakitchen70@gmail.com</p>
            </div>
            </div>
    
    </div>
          
    </div>
    </>
  )
}

export default Index
