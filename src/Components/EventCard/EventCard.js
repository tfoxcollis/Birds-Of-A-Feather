import "./EventCard.css"
import React from 'react'
import PropTypes from 'prop-types';

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


const location = PropTypes.shape({
  lat: PropTypes.number,
  lng: PropTypes.number,
  zip: PropTypes.number
})
EventCard.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  location: PropTypes.objectOf(location),  
  description: PropTypes.string,
  event: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  toggleModal: PropTypes.func
}