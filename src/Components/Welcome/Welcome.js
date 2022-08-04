import "./Welcome.css.scss"
import React from 'react'
import { Link } from "react-router-dom";
import comingSoon from "../../assets/imageComingSoon.jpg"

const Welcome = () => {
  return (
    <div className="welcome-main">
      <div className="welcome-container">
        <img src={comingSoon} alt="coming soon" className="logo"/>
        <span className="welcome-message">
          <h4>Welcome to Birds of a Feather! <br></br>
          Our goal is to connect LGBTQ+ families in the Las Vegas area.
          After you enter, select a zip code and see if any other families have set up events near you. 
          See an event you want to attend, hit that RSVP button and let the fam know you'll be there! 
          Because Birds of A Feather Flock Together
          </h4>
          <div className="btn-container">
            <button className="btn"><a href="/home">Get Connected</a></button>
          </div>
        </span>
      </div>
    </div>
  )
}

export default Welcome