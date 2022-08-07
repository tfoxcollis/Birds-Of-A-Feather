/// <reference types="cypress" />


describe("Event Form", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.mapquestapi.com/search/v3/prediction?*", {fixture:"predictions"} )
    cy.visit("http://localhost:3000/eventform")
  })

  it("should have a form on page load", () => {
    cy.get(".form-container").should("be.visible")
  })

  it("should be able to find the search bar and type in a local park and select a search option", () => {
    cy.get("#place-search-input").type("Exploration Peak Park")
      .get("#searchSubmit").click()
      .get(".poi-results .poi").should("have.length", 2)
      .get("#441968848").click()
  })
})

describe("Create Event", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.mapquestapi.com/search/v3/prediction?*", {fixture:"predictions"} )
    cy.visit("http://localhost:3000/eventform")
    cy.get("#place-search-input").type("Exploration Peak Park")
      .get("#searchSubmit").click()
      .get(".poi-results .poi").should("have.length", 2)
      .get("#441968848").click()
      .get("#date").type("2022-09-15")
      .get("#time").type("13:00")
      .get("#event").type("Hiking")
      .get("#description").type("Our fam is headed to Exploration Peak Park to hike the peak to the top!  Join us! We have a 3yo son")
      .get(".event-submit").click()
  })

  it("should be able to create event by typing info into event fields", () => {
    cy.get(".nav-bar").contains("Home").click()
      .get(".menu-main").contains("South West").click()
      .get(".content").contains("89178").click()
      .get(".events-container .event-card").should("have.length", 2)
      .get(".event-card").contains("Hiking")
      .get(".event-card").contains("2022-09-15")
      .get(".event-card").contains("13:00")
      .get(".event-card .event-description").contains("Our fam is headed to Exploration")
  })

})