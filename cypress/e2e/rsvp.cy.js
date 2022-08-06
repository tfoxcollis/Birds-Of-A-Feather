/// <reference types="cypress" />


describe("app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/rsvp")
  })

  it("should have a message on load that says the user has no RSVPs", () => {
    cy.get(".no-events-message").contains("You have not RSVP'd to any events! Go check some out!")
  })

  it("should be able to click home and select event and rsvp to it and have it show on the RSVP page", () => {
    cy.get(".nav-links").contains("Home").click()
      .get(".menu-container").contains("North West").click()
      .get(".content").contains("89129").click()
      .get(".toggle-button").click()
      .get(".rsvp-button").click()
      .get(".nav-links").contains("RSVP").click()
      .get(".event-card").contains("h3", "Picnic in the park")

  })

  it("should be able to cancel rsvp after it has been added", () => {
    cy.get(".nav-links").contains("Home").click()
      .get(".menu-container").contains("North West").click()
      .get(".content").contains("89129").click()
      .get(".toggle-button").click()
      .get(".rsvp-button").click()
      .get(".nav-links").contains("RSVP").click()
      .get(".event-card").contains("View Event").click()
      .get(".cancel-rsvp-button").should("be.visible").click()
      .get(".close-modal").click()
      .get(".no-events-message").contains("You have not RSVP'd to any events! Go check some out!")
  })
})