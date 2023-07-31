describe('yield data from cy.task', () => {
  context('excluded', async () => {
    it('gets a number', () => {
      // this particular cy.task yields a number
      cy.task<number>('getNumber').then((n) => {
        expect(n).to.be.a('number')
      })
    })
  })
  context.only('only', async () => {
    it('only gets a number', () => {
      // this particular cy.task yields a number
      cy.task<number>('getNumber').then((n) => {
        expect(n).to.be.a('number')
      })
    })
    it('only gets a number', () => {
      cy.task<number>('getNumber').then((n) => {
        expect(n).to.be.a('number')
      })
      cy.task<number>('getNumber').then((n) => {
        expect(n).to.be.a('number')
      })
    })
  })
})
