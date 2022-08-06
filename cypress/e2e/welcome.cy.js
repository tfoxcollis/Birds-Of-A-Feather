/// <reference types="cypress" />

describe("Welcome page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("should have a welcome message", () => {
    cy.get(".welcome-message").should("be.visible")
  })

  it("should have a logo", () => {
    cy.get(".logo").should("be.visible")
  })

  it("should have a button that when clicked takes the user to the homepage", () => {
    cy.get(".btn-container").contains("Get Connected").click()
    .url().should("eq", "http://localhost:3000/home")
  })
})