Feature: Login - Forget Password

    @id:6
    Scenario: Forgot password - happy path
        Given User navigates to Login page
        And User clicks on Forgot Password
        When User enters a Login Name "Trevor"
        And User enters an email "trevor@test.io"
        And User clicks on Continue
        Then Success alert message "Success: Password reset link has been sent to your e-mail address." should be shown

    @id:7
    Scenario: Forgot password - login name required
        Given User navigates to Login page
        And User clicks on Forgot Password
        When User enters an email "trevor@test.io"
        And User clicks on Continue
        Then Alert message "Error: The Login name was not provided or not found in our records, please try again!" should be shown

    @id:8
    Scenario: Forgot password - email required
        Given User navigates to Login page
        And User clicks on Forgot Password
        When User enters a Login Name "Trevor"
        And User clicks on Continue
        Then Alert message "Error: The Email address was not provided or not found in our records, please try again!" should be shown
