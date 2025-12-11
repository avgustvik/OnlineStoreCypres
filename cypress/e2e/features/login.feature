Feature: Login

 @id:3
    Scenario: User logs in to Store - positive scenario
        Given User navigates to Login page
        And User enters a Login Name
        And User enters a password
        When Start to type your When step here User clicks on button Login
        Then User is redirected to "rt=account/account" page
        And Text is My Account "Login Name"

 @id:4
    Scenario: Password can not be empty
        Given User navigates to Login page
        And User enters a Login Name
        When User clicks on button Login
        Then Alert message "Error: Incorrect login or password provided." should be shown

 @id:5
    Scenario: Login can not be empty
        Given User navigates to Login page
        And User enters a password
        When User clicks on button Login
        Then Alert message "Error: Incorrect login or password provided." should be shown

  @id:6
    Scenario: Forgot password - happy path
        Given User navigates to Login page
        And User clicks on Forgot Password
        When User enters a Login Name "Trevor"
        And User enters an email "trevor@test.io"
        And User clicks on Continue
        Then Success alert message "Success: Password reset link has been sent to your e-mail address." should be shown

  @id:7
    Scenario: Forgot Login - happy path
        Given User navigates to Login page
        And User clicks on Forgot Login
        When User enters Last Name "Trevor"
        And User enters an email "trevor@test.io"
        And User clicks on Continue
        Then Success alert message "Success: Your login name reminder has been sent to your e-mail address." should be shown




#Scenario: forget password - happy, empty login name, empty email
#Scenario: forget Login - happy pass, empty last name, empty email