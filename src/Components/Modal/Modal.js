import React, { useEffect } from "react"
import PropTypes from 'prop-types';
import "./Modal.css.scss"

const Modal = ({ modalEvent, toggleModal, setRsvp, rsvp}) => {

  useEffect(() => {
    if(!!modalEvent) {
      window.L.mapquest.key = process.env.REACT_APP_MAPQUEST_KEY;
      const container = window.L.DomUtil.get("map")
      if(container != null) {
        container._leaflet_id = null;
      }
      var map = window.L.mapquest.map('map', {
        center: [modalEvent.location.lat, modalEvent.location.lng],
        layers: window.L.mapquest.tileLayer('map'),
        zoom: 14
      });

      window.L.marker([modalEvent.location.lat, modalEvent.location.lng], {
        icon: window.L.mapquest.icons.marker(),
        draggable: false
      }).bindPopup("Las Vegas, NV").addTo(map);

      window.L.circle([modalEvent.location.lat, modalEvent.location.lng], { radius: 1000 }).addTo(map);

    }
  })

  const findRsvp = () => {
    return rsvp.find(singleRsvp => singleRsvp.eventId === modalEvent.id )
  }

  const cancelRsvp = (e) => {
    e.preventDefault(e)
    const findSingleRsvp = findRsvp()
    const filteredRsvps = rsvp.filter(rsvpObj => rsvpObj !== findSingleRsvp)
    setRsvp(filteredRsvps)
  }

  const addRsvp = (e) => {
    e.preventDefault(e)
    const newRsvp = {
      userId: 1,
      eventId: modalEvent.id
    }
    setRsvp([...rsvp, newRsvp])
  }

  return (
    <div className="modal-container off" id="modal-container">
      <div className="modal off" id="modal">
        {!!modalEvent ? 
          <>
            <h2>{modalEvent.event}</h2>
            <div className="modal-content">{modalEvent.description}</div>
            <div id="map" className="mapquest-map"></div>
            <div className="actions">
              <button className="close-modal" onClick={(e) => toggleModal(e)}>Close</button>
              {!!findRsvp() ?
              <button className="cancel-rsvp-button" onClick={(e) =>cancelRsvp(e)}>Cancel RSVP</button>
              :
              <button className="rsvp-button" onClick={(e) => addRsvp(e)}>RSVP</button> }
            </div>
          </> :
          null
        
        }
      </div>
    </div>
  )
}

export default Modal

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

Modal.propTypes = {
  modalEvent: PropTypes.objectOf(event),
  toggleModal: PropTypes.func,
  setRsvp: PropTypes.func,
  rsvp: PropTypes.arrayOf(PropTypes.objectOf(event))
}