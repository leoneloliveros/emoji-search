/// <reference types="Cypress" />

describe('my first test', () => {

  beforeEach(() => {
    cy.visit('/')
  })
  
  it('home page is working', () => {
    cy.contains('Emoji Search')
  })

  it('Obtaining emoji list', () => {
    cy.get(`[data-cy='emoji-row']`).should('have.length', 20)
  })

  it('consulta hacia un servidor', () => {
    cy.wait(10000)
  })

  it('allow user to search for an emoji', () => {
    cy.get(`[data-cy='search-input']`).type('joy')

    cy.get(`[data-cy='emoji-row']`).should('have.length', 3)

    cy.contains('Joy')
    cy.contains('Joy Cat')
    cy.contains('Joystick')


  })

  it('allow user to search for an emoji', () => {
    cy.get(`[data-cy='search-input']`).type('emoji that does not exits');
    cy.get(`[data-cy='emoji-row']`).should('have.length', 0)

    cy.contains('Emojis not found');
    cy.contains('Try searching for something else');

  })

})
