import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("the user types \"Canada\" in the search bar", () => { 
    cy.get('input[type="text"]').type("Canada");
});

Then("the search results should display \"Canada\"", () => {
    cy.get('input[type="text"]').should("have.value", "Canada");
});
