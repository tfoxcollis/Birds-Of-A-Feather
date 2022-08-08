import "./Events.css.scss"
import EventCard from "../EventCard/EventCard"
import React from 'react'
import PropTypes from 'prop-types';

const Events = ({type, filteredEvents, toggleModal, messageByType}) => {
  const renderedEvents = filteredEvents.map((event) => {
    return(
      <EventCard
        id={event.id}
        key={event.id}
        description={event.description}
        event={event.event}
        date={event.date}
        time={event.time}
        toggleModal={toggleModal}
      />
    )
  })

  return (
    <div className="events-container">
      {renderedEvents.length ? renderedEvents :
        <div className="no-events-message">
          <p>{messageByType(type)}</p>
        </div>
      }
    </div>
  )
}

export default Events

const event = PropTypes.shape({
  id: PropTypes.number,
  userId: PropTypes.number,
  location: PropTypes.objectOf({
    lat: PropTypes.number,
    lng: PropTypes.number,
    zip: PropTypes.number
  }),
  date: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  event: PropTypes.string
})

Events.propTypes = {
  type: PropTypes.string,
  messageByType: PropTypes.func,
  filteredEvents: PropTypes.arrayOf(PropTypes.objectOf(event)),
  toggleModal: PropTypes.func

}