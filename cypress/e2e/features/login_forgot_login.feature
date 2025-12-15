Feature: Login - Forget Login

    @id:9
    Scenario: Forgot Login - happy path
        Given User navigates to Login page
        And User clicks on Forgot Login
        When User enters Last Name "Trevor"
        And User enters an email "trevor@test.io"
        And User clicks on Continue
        Then Success alert message "Success: Your login name reminder has been sent to your e-mail address." should be shown

        @id:10
    Scenario: Forgot Login - Last name required
        Given User navigates to Login page
        And User clicks on Forgot Login
        When User enters an email "trevor@test.io"
        And User clicks on Continue
        Then Alert message "Error: The Last name was not provided or not found in our records, please try again!" should be shown

    @id:11
    Scenario: Forgot Login - email is required
        Given User navigates to Login page
        And User clicks on Forgot Login
        When User enters Last Name "Trevor"
        And User clicks on Continue
        Then Alert message "Error: The Email address was not provided or not found in our records, please try again!" should be shown
        