
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