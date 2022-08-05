import React from 'react'
import "./Nav.css"
import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <nav className="nav-bar">
      <span className="nav-links">
        <NavLink className="nav" to='/home' aria-label="Home">Home</NavLink>
        <NavLink className="nav" to='/rsvp' aria-label="Rsvp">RSVP</NavLink>
        <NavLink className="nav" to='/eventform' aria-label="Rsvp">Create Event</NavLink>
      </span>
		</nav>
  )
}

export default Nav