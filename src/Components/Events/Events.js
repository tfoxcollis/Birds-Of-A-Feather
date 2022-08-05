import "./Events.css"
import EventCard from "../EventCard/EventCard"
import React from 'react'

const Events = ({filteredEvents, toggleModal}) => {
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
      {renderedEvents.length ? renderedEvents : <p>Uh Oh! There are no events happening in this area.</p>}
    </div>
  )
}

export default Events