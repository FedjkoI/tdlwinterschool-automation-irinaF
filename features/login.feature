Feature: Login
    Scenario: Succesfully log in with valid username and password
        Given Iam on login page
        When I enter a "tomsmith" username
        And I enter a "SuperSecretPassword!" password
        And I press on Login button
        Then I see a message "You logged into a secure area!"
        And I see the Logout button


    Scenario: Cannot log in with valid username and password
        Given Iam on login page
        When I enter a "sfds" username
        And I enter a "fsfds!" password
        And I press on Login button
        Then I see a message "Your username is invalid!"
        And I don't see the Logout button
