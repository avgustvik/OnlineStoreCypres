Feature: Registration

    @id:1
    Scenario: User is able to register - positive scenario
        Given User navigates to Registration page
        And Click on button Continue to start registration
        When User enters First Name
        And User enters Last Name
        And User enters email "email"
        And User enters Login Name "random_login"
        And User enters telephone "45-789-23-45-01"
        And User enters fax "45-367-56-82"
        And User enters company name "Inc Evr"
        And User enters address to Address_1 "Miracle boulevard, ap 404"
        And User enters address to Address_2 "Non-existing district"
        And User enters City "Fantasy"
        And User selects country "France"
        And User selects State "Corse"
        And User enters Zip-code "11111"
        And User enters Login Name "fairytale4"
        And User enters a password "Reallysimple12!"
        And User confirms a password "Reallysimple12!"
        And User accepts Privacy Policy
        And User subscribes to Newsletter
        And User clicks on button Continue to continue a registration process
        Then User is redirected to "rt=account/success" page
        And Header text is "Your Account Has Been Created!"
        Then Welcome text is Welcome back "First Name"

    @id:2
    Scenario Outline: User is not able to register - negative scenario
        Given User navigates to Registration page
        And Click on button Continue to start registration
        When User clicks on button Continue to continue a registration process
        Then field "<Field Name>" should have an error with the text "<Expected Error>"

        Examples:
            | Field Name     | Expected Error                                                        |
            | firstNameField | First Name must be between 1 and 32 characters!                       |
            | lastNameField  | Last Name must be between 1 and 32 characters!                        |
            | emailField     | Email Address does not appear to be valid                             |
            | address1Field  | Address 1 must be between 3 and 128 characters!                       |
            | regionField    | Please select a region / state!                                       |
            | zipCodeField   | Zip/postal code must be between 3 and 10 characters!                  |
            | loginNameField | Login name must be alphanumeric only and between 5 and 64 characters! |
            | passwordField  | Password must be between 4 and 20 characters!                         |
