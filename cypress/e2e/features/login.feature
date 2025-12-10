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

#Scenario: forget password
#Scenario: forget Login