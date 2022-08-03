import "./EventCard.css"
import React from 'react'

const EventCard = ({id, userId, location, description, event, date }) => {
  return (
    <div className="event-card">
      <h3>{event}</h3>
      <p>{date}</p>
      <p>{description}</p>
      <p>{location.zip}</p>
    </div>
  )
}

export default EventCard