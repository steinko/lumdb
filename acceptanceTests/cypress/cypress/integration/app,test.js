it ('should contain text wecome', () => {
     cy.visit('http://localhost:3000')
     cy.contains('Welcome')
 })