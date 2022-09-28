context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('main title', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('Vite + React')
      .should('exist')
  })
})
