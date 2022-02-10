import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';


addMatchImageSnapshotCommand({
    failureThreshold: 100, // for the full image
    failureThresholdType: 'pixel',
    customDiffConfig: { threshold: 0.009 }, // per pixel
    capture: 'viewport', // capture viewport in screenshot
});


Cypress.Commands.add('setResolution', (size) => {
    if (Array.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
});


// wait for screen resizing before snapshot
Cypress.Commands.add('matchImageSnapshotDelayed', (...args) => {
    cy.wait(1000);
    return cy.matchImageSnapshot(...args);
});