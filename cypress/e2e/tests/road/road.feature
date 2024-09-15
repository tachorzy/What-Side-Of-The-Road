Feature: Driving side information
    
        Scenario: User searches for a country that drives on the right
            When I visit WhichSideOfTheRoad
            When the user types "United States" into the search bar
            Then the car should be left-hand-drive
        
        Scenario: User searches for a country that drives on the left
            When I visit WhichSideOfTheRoad
            When the user types "United Kingdom" into the search bar
            Then the car should be right-hand-drive