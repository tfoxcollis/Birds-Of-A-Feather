import "./EventCard.css"
import React from 'react'

const EventCard = ({id, userId, location, description, event, date }) => {
  return (
    <div className="event-card">
      <h3>Type of Event: {event}</h3>
      <p>Date: {date}</p>
      <p>Description: {description}</p>
      <p>Zip location: {location.zip}</p>
    </div>
  )
}

export default EventCard