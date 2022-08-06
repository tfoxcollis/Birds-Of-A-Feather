import React from 'react'
import './Menu.css'
import {zones, zoneKeys} from '../../data/mockData'

const Menu = ({ eventCards, setFilteredEvents }) => {
  const filterEvents = (e) => {
    const filtered = eventCards.filter(eventCard => {
      return eventCard.location.zip == e.target.id
    })
    setFilteredEvents(filtered)
  }

  const renderedZones = zoneKeys.map(zoneKey => {
    const keyZips = zones[zoneKey[0]].map(zip => {
      return (
        <button id={zip} className="zip-button" onClick={(e) => filterEvents(e)}>{zip}</button>
      )
    })

    const toggleCollapsible = (e) => {
      e.target.classList.toggle("active");
      var content = e.target.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }

    return (
      <span className="menu-container">
        <button type="button" className="collapsible" onClick={(e) => toggleCollapsible(e)}>{zoneKey[1]}</button>
        <div className="content">
          {keyZips}
        </div>
      </span>
    )
  })
  return (
    <div className="menu-main">
      <div className="pick-zip">
        <h2>Pick your zip</h2><br></br>
      </div>
      {renderedZones}
    </div>
  )
}

export default Menu