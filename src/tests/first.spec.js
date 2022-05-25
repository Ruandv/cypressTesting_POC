/// <reference types="cypress" />

describe('Tests for basic viewing', () => {
    beforeEach(() => {
        cy.visit(`/compare.html`);
    });

    it('should have the correct profile picture', () => {
        cy.get(".img1").matchImageSnapshot("picture1");
        // cy.get(".img2").matchImageSnapshot("picture1");
    })

    // it('viewport size should trigger mobile layout', () => {
    //     cy.viewport(424,800).get(".page").matchImageSnapshot("Mobile");
    // })
    // Feature Change 1
    // Feature Change 2
    // Feature Change 2
    // Feature Change 2
    // Feature Change 3
    // Feature Change 3
    // Feature Change 4
    // Feature Change 5
    // Feature Change 5
    // it('viewport size should trigger normal layout', () => {
    //     cy.viewport(768,893).get(".page").matchImageSnapshot("SideBySide");
    // })

});