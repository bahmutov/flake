it('clicks a disappearing button', () => {
  cy.visit('/')
  cy.get('[data-test-id="disappearingButton"]').click()
})
