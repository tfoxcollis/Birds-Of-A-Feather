import './App.css';
import Welcome from "../Welcome/Welcome"
// import PropTypes from 'prop-types';

import React from 'react'
import { Route } from 'react-router';

const App = () => {
  return (
    <Route>
      <Welcome />
    </Route>
  )
}

export default App
