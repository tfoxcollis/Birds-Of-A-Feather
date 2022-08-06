import "./EventCard.css"
import React, { useState } from 'react'
import Modal from "../Modal/Modal"

const EventCard = ({id, userId, location, description, event, date, time, toggleModal }) => {
  return (
    <div className="event-card">
      <h2 className="event-title">{event}</h2><br />
      <p className="event-date">Date: {date}</p>
      <p className="event-time">Time: {time}</p><br />
      <p className="event-desc-title">Description</p>
      <p className="event-description">{description}</p>
      <button  className="toggle-button" onClick={e => toggleModal(e, id)}>
        View Event
      </button>
    </div>
  )
}

export default EventCard