import React, { useEffect } from 'react'
import "./Modal.css.scss"

const Modal = ({showModal, modalEvent, toggleModal}) => {

  useEffect(() => {
    if(!!modalEvent) {
      window.L.mapquest.key = process.env.REACT_APP_MAPQUEST_KEY;
      window.L.mapquest.map('map', {
        center: [modalEvent.location.lat, modalEvent.location.lng],
        layers: window.L.mapquest.tileLayer('map'),
        zoom: 14
      });
    }
  })

  return (
    <div className="modal-container off" id="modal-container">
      <div className="modal off" id="modal">
        {!!modalEvent ? 
          <>
            <h2>Modal Window</h2>
            <div className="modal-content">{modalEvent.description}</div>
            <div id="map" className="mapquest-map"></div>
            <div className="actions">
              <button onClick={(e) => toggleModal(e)}>Close</button>
            </div>
          </> :
          null
        
        }
      </div>
    </div>
  )
}

export default Modal