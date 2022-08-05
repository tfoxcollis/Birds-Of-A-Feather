import React, { useState, useEffect } from 'react'
import "./EventForm.css"


const EventForm = () => {
  const [pointsOfInt, setPointsOfInt] = useState([])
  const [selectedPoint, setSelectedPoint] = useState()

  useEffect(() => {
    if(!!selectedPoint) {
      window.L.mapquest.key = process.env.REACT_APP_MAPQUEST_KEY;
      const container = window.L.DomUtil.get("map")
      if(container != null) {
        container._leaflet_id = null;
      }
      const coordinates = selectedPoint.place.geometry.coordinates
      var map = window.L.mapquest.map('map', {
        center: [coordinates[1], coordinates[0]],
        layers: window.L.mapquest.tileLayer('map'),
        zoom: 14
      });

      window.L.marker([coordinates[1], coordinates[0]], {
        icon: window.L.mapquest.icons.marker(),
        draggable: false
      }).bindPopup(selectedPoint.name).addTo(map);

      window.L.circle([coordinates[1], coordinates[0]], { radius: 1000 }).addTo(map);

    }
  })

  const fetchPoi = (e) => {
    e.preventDefault(e)
    const url = `http://www.mapquestapi.com/search/v3/prediction?key=${process.env.REACT_APP_MAPQUEST_KEY}&q=${e.target["place-search-input"].value}&collection=address,adminArea,airport,category,franchise,poi&limit=5&location=-115.140597,36.169202`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPointsOfInt(data.results)
      })
  }
  
  const handleClick = (e) => {
    e.preventDefault()
    const findPoint = pointsOfInt.find(point => e.target.id == point.mqId)
    setSelectedPoint(findPoint)
  }

  const renderedPointsOfInt = () => {
    return(
      pointsOfInt.map((point) => {
        return(
          <div>
            <h2>{point.name}</h2>
            <button id={point.mqId} onClick={(e) => handleClick(e)}>Select this</button>
          </div>
        )
      })
    )
  }

  return (
    <div className="main-event-container">
      <div className="form-container">
        <form onSubmit={(e) => fetchPoi(e)}>
          <input type="search" id="place-search-input" placeholder="Start Searching..."/>
          <input type="submit" value="search"/>
        </form>
        {pointsOfInt.length ? renderedPointsOfInt() : "Search for a location"}
        <form className="event-form-details">
          <label>Date:
            <input type="date" className="date"/>
            <input type="time" className="time"/>
          </label>
          <label>Description:
            <textarea type="text" className="description" placeholder="Who's going and what are you up to?" />
          </label>
        </form>
      </div>
      <div className="map-container">
        <div id="map" className="mapquest-map"></div>
      </div>
    </div>
  )
}

export default EventForm