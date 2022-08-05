import React, { useState, useEffect } from 'react'
import "./EventForm.css"


const EventForm = ({eventCards,setEventCards}) => {
  const [pointsOfInt, setPointsOfInt,] = useState([])
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEvent = {
      id: Date.now(),
      userId: 1,
      location: {
        lat: selectedPoint.place.geometry.coordinates[1],
        lng: selectedPoint.place.geometry.coordinates[0],
        zip: selectedPoint.place.properties.postalCode
      },
      
      date: e.target.date.value,
      time: e.target.time.value,
      event: e.target.event.value,
      description: e.target.description.value
    }
    setEventCards([...eventCards, newEvent])
  }

  return (
    <div className="main-event-container">
      <div className="form-container">
        <form onSubmit={(e) => fetchPoi(e)}>
          <input type="search" id="place-search-input" placeholder="Start Searching..."/>
          <input type="submit" value="search"/>
        </form>
        {pointsOfInt.length ? renderedPointsOfInt() : "Search for a location"}
        <form className="event-form-details" onSubmit={(e) => handleSubmit(e)}>

          <label>Date:
            <input type="date" className="date" id="date"/>
          </label>

          <label>Time:
            <input type="time" className="time" id="time"/>
          </label>

          <label>Event:
            <input type="event" className="event" id="event" placeholder="ex: Hiking"/>
          </label>

          <label>Description:
            <textarea type="text" className="description" id="description" placeholder="Who's going and what are you up to?" />
          </label>

          <input type="submit" value="Create Event!"/>
        </form>
      </div>
      <div className="map-container">
        <div id="map" className="mapquest-map"></div>
      </div>

    </div>
  )
}

export default EventForm