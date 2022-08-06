import "./Events.css.scss"
import EventCard from "../EventCard/EventCard"
import React from 'react'

const Events = ({type, filteredEvents, toggleModal, messageByType}) => {
  const renderedEvents = filteredEvents.map((event) => {
    return(
      <EventCard
        id={event.id}
        key={event.id}
        userId={event.userId}
        location={event.location}
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