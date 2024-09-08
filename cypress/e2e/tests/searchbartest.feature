Feature: Search for a country

    Scenario: User searches for an existing country
        Given the user is on the homepage
        When the user types "Canada" into the search bar
        Then the search results should display "Canada"

    Scenario: User searches for a non-existing country
        Given the user is on the homepage
        When the user types "Atlantis" into the search bar
        Then the search results should display "No results found"

    Scenario: User searches with an empty input
        Given the user is on the homepage
        When the user leaves the search bar empty
        Then the search results should display "Welcome, please select a country below."
