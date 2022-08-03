import "./Events.css"
import EventCard from "../EventCard/EventCard"
import React from 'react'

const Events = ({eventCards}) => {

  return (
    <div className="events-container">
      {eventCards.map((event) => {
        return(
          <EventCard
            id={event.id}
            key={event.id}
            userId={event.userId}
            location={event.location}
            description={event.description}
            event={event.event}
            date={event.date}
          />
        )
      })}
    </div>
  )
}

export default Events