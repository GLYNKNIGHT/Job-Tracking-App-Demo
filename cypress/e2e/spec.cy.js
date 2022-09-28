describe('Navigation', () => {
 

  it('loads the app', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').contains('Add Job')
    cy.contains('Tesco')
  })



  it('Check if the form works', ()=>{
    cy.visit('http://localhost:3000/')
    cy.get('input[id=company]').type('Cypress')
    cy.get('input[id=title]').type('Tester')
    cy.get('select[id=salary]').select('£25000-£30000')
    cy.get('input[id=link]').type('https://www.cypress.io/')
    //cy.get('input[id=applied]').click()
    cy.get('input[id=date]').type('25/12/2025')
    cy.get('input[id=notes]').type('This is a test note')
    cy.get('button').contains('Add Job').click()
    cy.contains('Cypress')
    cy.get('.removeCypress').click()
    
  })

it('opens the Big Card', () => {
  cy.visit('http://localhost:3000/')
  cy.get('.updateTesco').click()
  cy.contains('Link to Tesco Post')
})

})
