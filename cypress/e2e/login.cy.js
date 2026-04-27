describe('Login Test', () => {

  it('success login', () => {
    cy.visit('http://127.0.0.1:8080')
    
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.get('button').click()
    
    cy.get('#message').should('contain', 'Success')
  })

  it('fail login', () => {
    cy.visit('http://127.0.0.1:8080')

    cy.get('#username').type('admin')
    cy.get('#password').type('wrong')
    cy.get('button').click()

    cy.get('#message').should('contain', 'Fail')
  })

})