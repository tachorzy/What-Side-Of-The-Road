import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit WhichSideOfTheRoad", () => {
    cy.visit("http://localhost:5173/");
});

Then("I should see the search bar", () => {
    cy.get('[data-cy="searchbar"]').should('be.visible');
});

When("the user types \"Canada\" into the search bar", () => { 
    cy.get('[data-cy="searchbar"]').type("Canada");
});

Then("the search results should display \"Canada\"", () => {
    cy.get('[data-cy="searchbar"]').should("have.value", "Canada");
});
