Feature: Result message

    Scenario: User searches for a country that drives on the right
        When I visit WhichSideOfTheRoad
        When the user types "United States" into the search bar
        Then the result message should display "United States drives on the right hand side of the road."

    Scenario: User searches for a country that drives on the left
        When I visit WhichSideOfTheRoad
        When the user types "Japan" into the search bar
        Then the result message should display "Japan drives on the left hand side of the road."