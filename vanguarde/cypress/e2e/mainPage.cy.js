/// <reference types="cypress" />

context('Main Page', () => {

    beforeEach(() => {
        cy.intercept(
            {
                method: 'GET',
                url: 'http://127.0.0.1:5000/resources/songs-artists*',
            },
            []
        ).as('getSongsArtists');

        cy.visit('/');
    });

    it('Checks for page root', () => {
        cy.root().should('match', 'html');
    });

    it('Performs no-result search', () => {
        cy.getBySel('search-bar').type('it won\'t have any effect anyway');
        cy.wait('@getSongsArtists');
        cy.getBySel('song-list').should('be.empty');
    });
});
  