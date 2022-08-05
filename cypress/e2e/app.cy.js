/// <reference types="cypress" />

describe("app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/home")
  })

  it("should have a nav-bar with 3 links", () => {
    cy.get(".nav-links").children().should("have.length", 3)
  })

  it("should have a menu container visible on the left of the page with 4 buttons", () => {
    cy.get(".menu-main span").should("have.length", 4)
  })

  it("should be able to click button labeled North West and see zip codes display, then click to hide", () => {
    cy.get(".menu-container").contains("North West").click()
      .get(".content").should("be.visible")
      .contains("89129")
      .get(".menu-container").contains("North West").click()
      .get(".content").should("not.be.visible")
  })

  it("Should be able to click a zipcode and see eventCard", () => {
    cy.get(".menu-container").contains("North West").click()
      .get(".content").contains("89129").click()
      .get(".event-card").contains("h3", "Picnic in the park")
      .get(".event-card").contains("p", "Taking our 3yo to the park")
      .get(".toggle-button").click()
      .get(".modal").contains("h2", "Picnic in the park")
  })

})