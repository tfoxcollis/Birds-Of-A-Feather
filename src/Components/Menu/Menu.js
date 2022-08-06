import React from 'react'
import './Menu.css'
import './MenuZips.scss'
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
        <div className="zip-button">
          <a href="#">
              <p className="zip-p">{zip}</p>
              <div className="hoverBtn"></div>
              <div className="hoverBtn-bottom" id={zip} onClick={(e) => filterEvents(e)}></div>
          </a>
        </div>
      )
    })

    const collapseZones = (e) => {
      var zones = Array.from(document.querySelectorAll(".menu-container .collapsible"))
      zones.forEach(zone => {
        if(e.target.id !== zone.id){
          zone.classList.remove("active")
          zone.nextElementSibling.style.display = "none"

        }
      })
    }

    const toggleCollapsible = (e) => {
      e.target.classList.toggle("active");
      collapseZones(e)
      var content = e.target.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }

    return (
      <span className="menu-container">
        <button type="button" id={zoneKey[0]} className="collapsible" onClick={(e) => toggleCollapsible(e)}>{zoneKey[1]}</button>
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