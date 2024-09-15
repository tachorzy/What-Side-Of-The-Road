Feature: Search for a country

    Scenario: Visiting the page for the first time
        When I visit WhichSideOfTheRoad
        Then I should see the search bar

    Scenario: User searches with an empty input
        When I visit WhichSideOfTheRoad
        When the user leaves the search bar empty
        Then the search results should display nothing

    Scenario: User searches for an existing country
        When I visit WhichSideOfTheRoad
        When the user types "Canada" into the search bar
        Then the search results should display "Canada"

    Scenario: User searches for a non-existing country
        When I visit WhichSideOfTheRoad
        When the user types "Atlantis" into the search bar
        Then the search results should display "No countries found"

    Scenario: User searches for a country with a substring
        When I visit WhichSideOfTheRoad
        When the user types "Canad" into the search bar
        Then the search results should display "Canada"