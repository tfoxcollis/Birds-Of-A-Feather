import "./Welcome.css.scss"
import React from 'react'
import logo from "../../assets/BirdsLogo.jpg"

const Welcome = () => {
  return (
    <div className="welcome-main">
      <div className="welcome-container">
        <img src={logo} alt="Rainbow flamingo family logo with 2 adult birds looking at a baby bird" className="logo"/>
        <div className="message-container">
          <h3>Welcome to Birds of a Feather!</h3>
          <p className="welcome-message">
            Our goal is to connect LGBTQ+ families in the Las Vegas area.
            After you enter, select a zip code and see if any other families have set up events near you. 
            See an event you want to attend, hit that RSVP button and let the fam know you'll be there! 
            Dont see an event near you?  Create one on the Create Event Page!<br></br>
            Birds of A Feather Flock Together!
          </p><br></br>
          
          <div className="btn-container">
            <button className="btn"><a href="/home">Get Connected</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome