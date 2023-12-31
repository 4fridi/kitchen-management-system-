import React from 'react'
import './index.css'
import './about_us.css'
import {Link} from 'react-router-dom'

function About_us () {

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
        <div className="content-ab" ><br/>
       
           <h1> <h1> ----------------------------------About US-------------------------------</h1></h1>
            <p className="about-para-ab">
                Professional
                full-service catering and event
                planning are offered by Baba
                Kitchen. We are
                committed to the
                world of
                cuisine's inventive, eco-friendly, wholesome, and above all, tasty flavors! Our workforce has a total of
                over 20 years
                of expertise in kitchen and catering.

                We have been working in the catering and events industries for twenty years and started our own business
                to
                provide the
                best catering services to you, our loyal customers. Today's restaurants continue the tradition started
                by
                the late
                executive chef John Paul of offering outstanding dishes in generous servings with elegant presentations.

                You are cordially invited to Baba Kitchen. With our knowledgeable personnel and professional catering
                space,
                we can help
                customers make any occasion a success.

                We make it simple to order food online. We offer a solution for anything from common office snacks to
                off-site customer
                events, for groups of 10 to 10,000 people.

                We give distinctive foods to meet the most requested desires and tastes. We serve a distinctive and
                varied
                cuisine to
                satisfy everyone's appetite.
            </p>
           
            <h1><h1>-------------------------Our Principal Strength-----------------------</h1></h1>
            <p className="about-para-ab">
                We promise to always deliver first-rate customer service, superb food, and a distinguished presentation.
                Our
                specialty
                is serving up our patron's favorite old-fashioned and modern dishes. They continue to visit us because
                of
                our inventive
                cuisine and welcoming staff.

                For us, our clients must understand with whom they are conducting business. We're sure you'll enjoy what
                you
                see if you
                take the time to learn more about who we are and what we stand for.

                To ensure the dependability of our food and services, we only use the highest quality type of fixings
                and
                the most
                recent technology.

                In addition to our assurance that you have a choice of reliable and well-rated caterers to consider, you
                may
                make plans
                for any social event, regardless of its size, online.

            </p>
            <h1><h1>-----------------Client Services & Event
                Specialists----------------</h1></h1>
        
            <p className="about-para-ab">
                Providing the ultimate customer satisfaction experience is our priority. Our service provides our
                clients
                with excellent
                value for money by offering top-notch quality, professional service, and affordable pricing.

                Every business depends on its customers. There wouldn't be any success without them. No workers and
                perhaps
                a discarded
                product. In light of this, we work hard to ensure that our customers always feel valued. It is our
                responsibility to pay
                attention to them, discover their preferences, and help them feel as though their opinions are valued.

                You may get assistance from our event professionals with event planning. Please get in touch with us if
                you
                need help
                creating a menu. We can make unique proposals and cost summaries and are pleased to assist. You can ask
                us
                questions at
                any time. Ask us if you can't find what you're searching for on the list.
            </p>
            <br/>
        </div>

        </div>  
    </>
  )
}

export default About_us
