import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegistrationPage from "../../pages/RegistrationPage";
import CommonPage from "../../pages/CommonPage";
import { randomFirstName, randomLastName, randomEmail, randomLogin } from "../../support/utils";

const registrationPage = new RegistrationPage()

Given('User navigates to Registration page', function () {
  registrationPage.goTo(Cypress.env('url') + "?rt=account/create");
});

When('Click on button Continue to start registration', function () {
  registrationPage.registration_start();
});

When('User enters First Name', function () {
  const firstName = randomFirstName();
  this.firstName = firstName;
  registrationPage.registration_personal_details_firstName(firstName);
});


When('User enters Last Name', function () {
  const lastName =  randomLastName();
  this.lastName = lastName;
  registrationPage.registration_personal_details_lastName(lastName);
});

When('User enters email {string}', function (email) {
  registrationPage.registration_personal_details_email(email);
});

When('User enters telephone {string}', function (phone) {
  registrationPage.registration_personal_details_phone(phone);
});

When('User enters fax {string}', function (fax) {
  registrationPage.registration_personal_details_fax(fax);
});

When('User enters company name {string}', function (company) {
  registrationPage.registration_address_company(company);
});

When('User enters address to Address_1 {string}', function (address1) {
  registrationPage.registration_address_address1(address1);
});

When('User enters address to Address_2 {string}', function (address2) {
  registrationPage.registration_address_address2(address2);
});

When('User enters City {string}', function (city) {
  registrationPage.registration_address_city(city);
});

When('User selects State {string}', function (option) {
  registrationPage.registration_address_region(option);
});

When('User enters Zip-code {string}', function (zipcode) {
  registrationPage.registration_address_zipcode(zipcode);
});

When('User selects country {string}', function (country) {
  registrationPage.registration_address_country(country);
});

When('User enters Login Name {string}', function () {
  const login = registrationPage.registration_login_details_login();
  Cypress.env('loginName', login);   
});

When('User enters a password {string}', function (password) {
  registrationPage.registration_login_details_password(password);
  Cypress.env('password', password);   
});

When('User confirms a password {string}', function (confirmPassword) {
  registrationPage.registration_login_details_confirm_password(confirmPassword);
});

When('User subscribes to Newsletter', function () {
  registrationPage.registration_newsletter_subscribe();
});

When('User accepts Privacy Policy', function () {
  registrationPage.registration_accept_privacy_policy();
});

When('User clicks on button Continue to continue a registration process', function () {
  registrationPage.registration_continue();
});

Then('User is redirected to success page with name {string}', function(name) {
  registrationPage.registration_validate_name(name);
});

Then('Welcome text is Welcome back {string}', function(ignoredPlaceholder) {
  const expectedFirstName = this.firstName;
  registrationPage.registration_validateFirstName(expectedFirstName);
});

Then('field {string} should have an error with the text {string}', (fieldName, expectedError) => {
  registrationPage.registration_error(fieldName, expectedError);
});

Given('User is registered in the app', function () {
  this.user = registrationPage.registration_user_is_registered();
});
