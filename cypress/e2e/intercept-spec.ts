describe('TodoMVC', function () {
  it('should intercept postman', function () {
    cy.visit('/')
    cy.intercept('POST', 'https://postman-echo.com/post', {
      statusCode: 200,
      body: {
        name: 'Peter Pan',
      },
    })
    cy.log('clicking the h1 to trigger the intercept')
    cy.get('h1').click()
  })
})
