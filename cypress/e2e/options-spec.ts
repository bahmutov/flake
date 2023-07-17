describe('TodoMVC', function () {
  it('should invoke some commands that have exceptional option handling', function () {
    cy.visit('/')
    cy.get('h1', { log: false }).click({ timeout: 100000 })
    cy.wrap(
      {
        ok: true,
      },
      { log: true },
    )
      .should('have.a.property', 'ok')
      .then({ timeout: 1000 }, () => {
        cy.log('after!')
      })
    cy.request('/', {
      body: 'abc',
    })
    cy.task(
      'getNumber',
      {
        payload: 'def',
      },
      { log: true },
    )
  })
})
