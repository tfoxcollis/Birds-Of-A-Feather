import './App.css';
import Welcome from "../Welcome/Welcome"
import Nav from "../Nav/Nav"
import Rsvp from "../Rsvp/Rsvp"
// import PropTypes from 'prop-types';

import React, { useState } from 'react'
import { Route } from 'react-router';

const App = () => {
  const [eventCards, setEventCards] = useState()
  
  return (
    <div className="main">
      <main className="main-container">
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/home" >
          <Nav />
        </Route>
        <Route exact path="/Rsvp">
          <Nav />
          <Rsvp />
        </Route>

      </main>
      <footer className="footer">
        
      </footer>
    </div>
  )
}

export default App
