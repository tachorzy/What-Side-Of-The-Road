import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit WhichSideOfTheRoad", () => {
    cy.visit("http://localhost:5173/");
});

When("the user types \"United States\" into the search bar", () => { 
    cy.get('[data-cy="searchbar"]').type("United States", { force: true });
});

Then("the car should be left-hand-drive", () => { 
    cy.get('[data-cy="left-hand-suv"]').should("be.visible");
});

Then("the car should be right-hand-drive", () => {
    cy.get('[data-cy="right-hand-suv"]').should("be.visible");
});