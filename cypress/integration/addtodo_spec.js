// describe('My First Test', function() {
//     it('clicking "type" shows the right headings', function() {
//       cy.visit('https://example.cypress.io')
  
//       cy.pause()
  
//       cy.contains('type').click()
  
//       // Should be on a new URL which includes '/commands/actions'
//       cy.url().should('include', '/commands/actions')
  
//       // Get an input, type into it and verify that the value has been updated
//       cy.get('.action-email')
//         .type('fake@email.com')
//         .should('have.value', 'fake@email.com')
//     })
//   })
describe('Add Todo ', function () {
    it('visit the add todo screen', function () {
      
        cy.visit('http://localhost:3000/addtodo')
       cy.get('#name')
       .type('adding todo using cypress')
       .should('have.value','adding todo using cypress')
       cy.get('#order')
       .type('321')
       .should('have.value','321')
       cy.get('.signup-form-button')
       .click()
  

       
    })
})