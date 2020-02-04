
before(() => { cy.visit('http://localhost:3000') })
it ('should contain text wecome', () => {
     cy.contains('Welcome')
 })

it ('should not  contain text show and hide', () => {
    cy.get('body').should('not.contain', 'show and hide')
 })

 it ('should  contain text show and hide', () => {
     cy.get('body').contains('Toggle').click()
     cy.contains('show and hide')
 })


 it ('should  contain texts Spider Man amd Star Wars', () => {
     cy.contains('Star Wars')
     cy.contains('Spider Man')
 })

  it ('should  contain decription decription not available  amd Star Wars', () => {
     cy.contains('Decription not available')
     cy.contains('Space Movie')
 })