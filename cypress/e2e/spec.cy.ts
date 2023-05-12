// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('http://localhost:4200/')
cy.contains('Save').click()
cy.get('[data-cy="user-name"]').type('Nikitha')
cy.get('[data-phonenumber="ph-no"]').type('9734109934')
cy.get('[data-email="email"]').type('fake@email.com')
cy.get('[type="radio"]').check('banana')
cy.contains('Link').click()
    // cy.contains('type').click()
    // cy.url().should('include', '/commands/actions')
    // cy.get('.action-email').type('fake@email.com')
  })
})