import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit WhichSideOfTheRoad", () => {
    cy.visit("http://localhost:5173/");
});

Then("I should see the search bar", () => {
    cy.get('[data-cy="searchbar"]').should('be.visible');
});

When("the user leaves the search bar empty", () => {
    cy.get('[data-cy="searchbar"]').should('be.empty');
});

Then("the search results should display nothing", () => { 
    cy.get('[data-cy="searchbar"]').should("have.value", "");
});

When("the user types \"Canada\" into the search bar", () => { 
    cy.get('[data-cy="searchbar"]').type("Canada", { force: true });
});

Then("the search results should display \"Canada\"", () => {
    cy.get('[data-cy="searchbar"]').should("have.value", "Canada");
});
