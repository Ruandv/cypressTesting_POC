/// <reference types="cypress" />

describe('Tests for basic viewing', () => {
    beforeEach(() => {
        cy.visit(``);
        cy.get(".myPhoto").as('image');
    });

    it('should have the image',()=>{
        cy.get(".myPhoto").as('image').matchImageSnapshot("FormalImage");
    })
});