import './App.css';
import Welcome from "../Welcome/Welcome"
import Nav from "../Nav/Nav"
import Rsvp from "../Rsvp/Rsvp"
import { eventsData, usersData} from "../../data/mockData"
import Events from "../Events/Events"
import Menu from "../Menu/Menu"
import Modal from '../Modal/Modal';
// import PropTypes from 'prop-types';

import React, { useState } from 'react'
import { Route } from 'react-router';

const App = () => {
  const [eventCards, setEventCards] = useState(eventsData)
  const [filteredEvents, setFilteredEvents] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalEvent, setModalEvent] = useState()

  const toggleModal = (e, id) => {
    const event = filteredEvents.find(event => event.id === id)
    setModalEvent(event)
    setShowModal(!showModal)
    const modal = document.getElementById("modal")
    const modalContainer = document.getElementById("modal-container")
    modalContainer.classList.toggle("off")
    modal.classList.toggle("off")
  }

  return (
    <div className="main">
      <header>
        <Route exact path="/home" >
          <Nav />
        </Route>
        
        <Route exact path="/Rsvp">
          <Nav />
        </Route>
      </header>
      <main role="main" className="main-container">
        <Route exact path="/">
          <Welcome />
        </Route>

        <Route exact path="/home" >
          <Menu eventCards={eventCards} setFilteredEvents={setFilteredEvents}/>
          <Events filteredEvents={filteredEvents} toggleModal={toggleModal}/>
          <Modal showModal={showModal} modalEvent={modalEvent} toggleModal={toggleModal}/>
        </Route>
        
        <Route exact path="/Rsvp">
          <Rsvp />
        </Route>

      </main>
      <footer className="footer">
        
      </footer>
    </div>
  )
}

export default App
