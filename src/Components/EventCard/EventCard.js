import "./EventCard.css"
import React, { useState } from 'react'
import Modal from "../Modal/Modal"

const EventCard = ({id, userId, location, description, event, date, time, toggleModal }) => {
  return (
    <div className="event-card">
      <h3>Type of Event: {event}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Description: {description}</p>
      <p>Zip location: {location.zip}</p>
      <button  className="toggle-button" onClick={e => toggleModal(e, id)}>
        View Event
      </button>
    </div>
  )
}

export default EventCard