import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit WhichSideOfTheRoad", () => {
    cy.visit("http://localhost:5173/");
});

Then("the user should see \"Welcome, please select a country below.\"", () => { 
    cy.get('[data-cy="welcome-message"]').should("contain", "Welcome, please select a country below.");
})
When("the user types \"United States\" into the search bar", () => { 
    cy.get('[data-cy="searchbar"]').type("United States", { force: true }).type("{enter}{enter}", { force: true })
});

Then("the result message should display \"United States drives on the right hand side of the road.\"", () => {
    cy.get('[data-cy="result-message"]').should("contain", "United States drives on the right hand side of the road.");
})

When("the user types \"Japan\" into the search bar", () => { 
    cy.get('[data-cy="searchbar"]').type("Japan", { force: true }).type("{enter}{enter}", { force: true })
});

Then("the result message should display \"Japan drives on the left hand side of the road.\"", () => {
    cy.get('[data-cy="result-message"]').should("contain", "Japan drives on the left hand side of the road.");
})
