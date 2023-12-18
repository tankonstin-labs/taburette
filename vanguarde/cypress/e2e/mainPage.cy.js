/// <reference types="cypress" />

context('Main Page', () => {
    // beforeEach(() => {
    //   cy.visit('/')
    // })

    it('performs a trivial check', () => {
        cy.visit('/')
        // expect(true).to.equal(true);
    });

    // it('gets no console errors', () => {
        
    // });
  
    // it('.type() - type into a DOM element', () => {
    //   // https://on.cypress.io/type
    //   cy.get('.action-email')
    //     .type('fake@email.com').should('have.value', 'fake@email.com')
  
    //     // .type() with special character sequences
    //     .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
    //     .type('{del}{selectall}{backspace}')
  
    //     // .type() with key modifiers
    //     .type('{alt}{option}') //these are equivalent
    //     .type('{ctrl}{control}') //these are equivalent
    //     .type('{meta}{command}{cmd}') //these are equivalent
    //     .type('{shift}')
  
    //     // Delay each keypress by 0.1 sec
    //     .type('slow.typing@email.com', { delay: 100 })
    //     .should('have.value', 'slow.typing@email.com')
  
    //   cy.get('.action-disabled')
    //     // Ignore error checking prior to type
    //     // like whether the input is visible or disabled
    //     .type('disabled error checking', { force: true })
    //     .should('have.value', 'disabled error checking')
    // })
  
    // it('.focus() - focus on a DOM element', () => {
    //   // https://on.cypress.io/focus
    //   cy.get('.action-focus').focus()
    //     .should('have.class', 'focus')
    //     .prev().should('have.attr', 'style', 'color: orange;')
    // })
  
    // it('.clear() - clears an input or textarea element', () => {
    //   // https://on.cypress.io/clear
    //   cy.get('.action-clear').type('Clear this text')
    //     .should('have.value', 'Clear this text')
    //     .clear()
    //     .should('have.value', '')
    // })
  
    // it('.submit() - submit a form', () => {
    //   // https://on.cypress.io/submit
    //   cy.get('.action-form')
    //     .find('[type="text"]').type('HALFOFF')
  
    //   cy.get('.action-form').submit()
    //     .next().should('contain', 'Your form has been submitted!')
    // })
  
    // it('.click() - click on a DOM element', () => {
    //   // https://on.cypress.io/click
    //   cy.get('.action-btn').click()
  
    //   // You can click on 9 specific positions of an element:
    //   //  -----------------------------------
    //   // | topLeft        top       topRight |
    //   // |                                   |
    //   // |                                   |
    //   // |                                   |
    //   // | left          center        right |
    //   // |                                   |
    //   // |                                   |
    //   // |                                   |
    //   // | bottomLeft   bottom   bottomRight |
    //   //  -----------------------------------
  
    //   // clicking in the center of the element is the default
    //   cy.get('#action-canvas').click()
  
    //   cy.get('#action-canvas').click('topLeft')
    //   cy.get('#action-canvas').click('top')
    //   cy.get('#action-canvas').click('topRight')
    //   cy.get('#action-canvas').click('left')
    //   cy.get('#action-canvas').click('right')
    //   cy.get('#action-canvas').click('bottomLeft')
    //   cy.get('#action-canvas').click('bottom')
    //   cy.get('#action-canvas').click('bottomRight')
  
    //   // .click() accepts an x and y coordinate
    //   // that controls where the click occurs :)
  
    //   cy.get('#action-canvas')
    //     .click(80, 75) // click 80px on x coord and 75px on y coord
    //     .click(170, 75)
    //     .click(80, 165)
    //     .click(100, 185)
    //     .click(125, 190)
    //     .click(150, 185)
    //     .click(170, 165)
  
    //   // click multiple elements by passing multiple: true
    //   cy.get('.action-labels>.label').click({ multiple: true })
  
    //   // Ignore error checking prior to clicking
    //   cy.get('.action-opacity>.btn').click({ force: true })
    // })
  
    // it('cy.scrollTo() - scroll the window or element to a position', () => {
    //   // https://on.cypress.io/scrollto
  
    //   // You can scroll to 9 specific positions of an element:
    //   //  -----------------------------------
    //   // | topLeft        top       topRight |
    //   // |                                   |
    //   // |                                   |
    //   // |                                   |
    //   // | left          center        right |
    //   // |                                   |
    //   // |                                   |
    //   // |                                   |
    //   // | bottomLeft   bottom   bottomRight |
    //   //  -----------------------------------
  
    //   // if you chain .scrollTo() off of cy, we will
    //   // scroll the entire window
    //   cy.scrollTo('bottom')
  
    //   cy.get('#scrollable-horizontal').scrollTo('right')
  
    //   // or you can scroll to a specific coordinate:
    //   // (x axis, y axis) in pixels
    //   cy.get('#scrollable-vertical').scrollTo(250, 250)
  
    //   // or you can scroll to a specific percentage
    //   // of the (width, height) of the element
    //   cy.get('#scrollable-both').scrollTo('75%', '25%')
  
    //   // control the easing of the scroll (default is 'swing')
    //   cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })
  
    //   // control the duration of the scroll (in ms)
    //   cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
    // })
  })
  