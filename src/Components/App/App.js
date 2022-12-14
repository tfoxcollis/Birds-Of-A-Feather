import './App.css';
import Welcome from "../Welcome/Welcome"
import Nav from "../Nav/Nav"
import Rsvp from "../Rsvp/Rsvp"
import { eventsData } from "../../data/mockData"
import Events from "../Events/Events"
import Menu from "../Menu/Menu"
import Modal from '../Modal/Modal';
import EventForm from '../EventForm/EventForm';
import Footer from '../Footer/Footer';

import React, { useState } from 'react'
import { Route } from 'react-router';

const App = () => {
  const [eventCards, setEventCards] = useState(eventsData)
  const [filteredEvents, setFilteredEvents] = useState([])
  const [modalEvent, setModalEvent] = useState()
  const [rsvp, setRsvp] = useState([])

  const toggleModal = (e, id) => {
    const event = filteredEvents.find(event => event.id === id)
    setModalEvent(event)
    const modal = document.getElementById("modal")
    const modalContainer = document.getElementById("modal-container")
    modalContainer.classList.toggle("off")
    modal.classList.toggle("off")
  }

  const messageByType = (type) => {
    if(type === "home"){
      return "Uh Oh! There are no events happening in this area. Please try another zip code!"
    }else if(type === "Rsvp"){ 
      return "You have not RSVP'd to any events- Go check some out! Or create your own!"
    }
  }

  return (
    <div className="main">
      <header className="main-header">
        <Route exact path="/home" >
          <Nav />
        </Route>
        
        <Route exact path="/Rsvp">
          <Nav />
        </Route>

        <Route exact path="/eventform">
          <Nav />
        </Route>
      </header>
      <main role="main" className="main-container">
        <Route exact path="/">
          <Welcome />
        </Route>

        <Route exact path="/home" >
          <Menu eventCards={eventCards} setFilteredEvents={setFilteredEvents}/>
          <Events type="home" messageByType={messageByType} filteredEvents={filteredEvents} toggleModal={toggleModal}/>
          <Modal modalEvent={modalEvent} toggleModal={toggleModal} setRsvp={setRsvp} rsvp={rsvp}/>
        </Route>
        
        <Route exact path="/Rsvp">
          <Rsvp messageByType={messageByType} rsvp={rsvp} eventCards={eventCards} toggleModal={toggleModal}/>
          <Modal modalEvent={modalEvent} toggleModal={toggleModal} setRsvp={setRsvp} rsvp={rsvp}/>
        </Route>

        <Route exact path="/eventform">
          <EventForm eventCards={eventCards} setEventCards={setEventCards}/>
        </Route>

      </main>
      <footer className="footer">
        <Route exact path="/home" >
          <Footer />
        </Route>
        
        <Route exact path="/Rsvp">
          <Footer />
        </Route>

        <Route exact path="/eventform">
          <Footer />
        </Route>
      </footer>
    </div>
  )
}

export default App
