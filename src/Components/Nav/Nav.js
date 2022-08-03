import React from 'react'
import "./Nav.css"
import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <nav className="nav-bar">
      <span className="nav-links">
        <NavLink className="home-nav" to='/home' aria-label="Home"><a>HOME</a></NavLink>
        <NavLink className="rsvp-nav" to='/rsvp' aria-label="Rsvp">RSVP</NavLink>
      </span>
		</nav>
  )
}

export default Nav