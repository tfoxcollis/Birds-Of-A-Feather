import React from 'react'
import "./Modal.css"

const Modal = ({showModal, message, toggleModal}) => {
  return (
    <div className="modal-container">
      {showModal ? 
      <>
        <p>{message}</p>
        <button onClick={(e) => toggleModal(e)}>Close</button>
      </>
      : null}
    </div>
  )
}

export default Modal