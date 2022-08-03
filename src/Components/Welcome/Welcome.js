import "./Welcome.css"
import React from 'react'
import { Link } from "react-router-dom";
import comingSoon from "/Users/trish/turing/frontend/mod3/birds-of-a-feather/src/assets/imageComingSoon.jpg"

const Welcome = () => {
  return (
    <div className="welcome-main">
      <div className="welcome-container">
        <img src={comingSoon} alt="coming soon" className="logo"/>
        <h1 className="welcome-title">Birds of a Feather</h1>
        <p>Welcome to Birds of a Feather! 
        Our goal is to connect LGBTQ+ families in the Las Vegas area.
        After you enter, select a zip code and see if any other families have set up events near you. 
        See an event you want to attend, hit that RSVP button and let the fam know you'll be there! 
        Because Birds of A Feather Flock Together
        </p>
      </div>
      <Link to="/home">
        <button className="get-connected-button">Get Connected!</button>
      </Link>
    </div>
  )
}

export default Welcome