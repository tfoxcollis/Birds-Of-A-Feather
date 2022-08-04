import React from 'react'
import "./Modal.css.scss"

const Modal = ({showModal, modalEvent, toggleModal}) => {
  return (
    <div className="modal-container off" id="modal-container">
      <div className="modal off" id="modal">
        {!!modalEvent ? 
          <>
            <h2>Modal Window</h2>
            <div className="modal-content">{modalEvent.description}</div>
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