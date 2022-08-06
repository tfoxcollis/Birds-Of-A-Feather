import React, { useState, useEffect } from 'react'
import "./EventForm.css"


const EventForm = ({eventCards,setEventCards}) => {
  const [pointsOfInt, setPointsOfInt,] = useState([])
  const [selectedPoint, setSelectedPoint] = useState()

  useEffect(() => {
    if(!!selectedPoint) {
      window.L.mapquest.key = process.env.REACT_APP_MAPQUEST_KEY;
      const container = window.L.DomUtil.get("eventMap")
      if(container != null) {
        container._leaflet_id = null;
      }
      const coordinates = selectedPoint.place.geometry.coordinates
      var map = window.L.mapquest.map('eventMap', {
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
    const url = `https://www.mapquestapi.com/search/v3/prediction?key=${process.env.REACT_APP_MAPQUEST_KEY}&q=${e.target["place-search-input"].value}&collection=address,adminArea,airport,category,franchise,poi&limit=5&location=-115.140597,36.169202`
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
          <div className="poi">
            <button id={point.mqId} onClick={(e) => handleClick(e)}>Select this</button>
            <h3>{point.name}</h3>
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
        <div className="search-form">
          <form onSubmit={(e) => fetchPoi(e)}>
            <input type="search" id="place-search-input" placeholder="Start Searching..."/>
            <input type="submit" value="search"/>
          </form>
          {pointsOfInt?.length ? 
            <div className="poi-results"> 
              {renderedPointsOfInt()}
            </div> : "Search for a location"}
        </div>
        <form className="event-form-details" onSubmit={(e) => handleSubmit(e)}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="date">Date:</label>
                </td>
                <td>
                  <input type="date" className="date" id="date"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="time">Time:</label>
                </td>
                <td>
                  <input type="time" className="time" id="time"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="event">Event:</label>
                </td>
                <td>
                  <input type="event" className="event" id="event" placeholder="ex: Hiking"/>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="description">Description:</label>
                </td>
                <td>
                  <textarea type="text" className="description" id="description" placeholder="Who's going and what are you up to?" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" className="event-submit" value="Create Event!"/>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className="map-container">
        <div id="eventMap" className="mapquest-map"></div>
      </div>
    </div>
  )
}

export default EventForm