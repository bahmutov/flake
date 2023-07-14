import { allItems, TODO_ITEM_ONE } from './utils'

before(function () {
  cy.log('Before Outer')
})

after(function () {
  cy.log('After Outer')
})

describe('TodoMVC', function () {
  before(function () {
    cy.log('Before TodoMVC')
  })

  after(function () {
    cy.log('After TodoMVC')
  })

  beforeEach(function () {
    let title: string
    cy.visit('/')
    cy.title().then((t) => {
      title = t
    })

    const NEW_TODO = '.new-todo'
    cy.get(NEW_TODO).type(TODO_ITEM_ONE).type('{enter}')
    allItems().eq(0).find('label').should('contain', TODO_ITEM_ONE)
  })

  it('should log', function () {
    cy.log('this should be logged')
  })

  afterEach(function () {
    cy.log('afterEach')
  })
})
