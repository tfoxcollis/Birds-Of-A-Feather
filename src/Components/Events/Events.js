import "./Events.css"

import React from 'react'

const Events = ({eventCards}) => {

  return (
    <div>
      {eventCards.map((event) => {
        return(
          <EventCard
            id={event.id}
            key={event.id}
            location={event.location}
            description={event.description}
            event={event.event}
          />
        )
      })}
    </div>
  )
}

export default Events