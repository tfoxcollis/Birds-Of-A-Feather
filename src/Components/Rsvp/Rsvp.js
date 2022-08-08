import React from 'react'
import Events from '../Events/Events'
import "./Rsvp.css"
import PropTypes from 'prop-types';



const Rsvp = ({messageByType, rsvp, eventCards, toggleModal}) => {

 
  const filterEvents = eventCards.filter((event) => {
    const rsvpobj = rsvp.find(rsvp => rsvp.eventId === event.id) 
    if(rsvpobj){
      return true
    }else{
     return false
    }
  }) 
  
  return (
    <div>
      <h2>Your RSVP Page</h2>
      <Events type="Rsvp" messageByType={messageByType} filteredEvents={filterEvents} toggleModal={toggleModal} />

    </div>
  )
}

export default Rsvp

Rsvp.propTypes = {
  messageByType: PropTypes.func,
  rsvp: PropTypes.arrayOf(PropTypes.object),
  eventCards: PropTypes.arrayOf(PropTypes.object),
  toggleModal: PropTypes.func
}