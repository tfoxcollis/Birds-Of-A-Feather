import './App.css';
import Welcome from "../Welcome/Welcome"
import Nav from "../Nav/Nav"
// import PropTypes from 'prop-types';

import React from 'react'
import { Route } from 'react-router';

const App = () => {
  return (
    <div className="main">
      <main className="main-container">
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/home" >
          <Nav />
        </Route>

      </main>
      <footer className="footer">
        
      </footer>
    </div>
  )
}

export default App
