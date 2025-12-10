import {
  randomLogin,
  randomEmail,
  randomFirstName,
  randomLastName,
} from "../support/utils.js";
import CommonPage from "./CommonPage";
import { faker } from "@faker-js/faker";

class RegistrationPage {
  registrationStartButton = 'button[type="submit"][title="Continue"]';
  firstNameField = "#AccountFrm_firstname";
  lastNameField = "#AccountFrm_lastname";
  emailField = "#AccountFrm_email";
  phoneField = "#AccountFrm_telephone";
  faxField = "#AccountFrm_fax";
  companyField = "#AccountFrm_company";
  address1Field = "#AccountFrm_address_1";
  address2Field = "#AccountFrm_address_2";
  cityField = "#AccountFrm_city";
  regionField = "#AccountFrm_zone_id";
  zipCodeField = "#AccountFrm_postcode";
  countryField = "#AccountFrm_country_id";
  loginNameField = "#AccountFrm_loginname";
  passwordField = "#AccountFrm_password";
  passwordConfirmField = "#AccountFrm_confirm";
  newsletterYes = 'input[type="radio"][value="1"]';
  newsletterNo = 'input[type="radio"][value="0"]';
  aceptPrivacyPolicy = "#AccountFrm_agree";
  continueRegistrationButton = 'button[title="Continue"]';
  validateFirstName = "#customernav";

  goTo(url) {
    cy.visit(url);
  }

  registration_start() {
    cy.get(this.registrationStartButton).click();
  }

  registration_personal_details_firstName(firstName) {
    cy.get(this.firstNameField).type(firstName);
  }

  registration_personal_details_lastName(lastName) {
    cy.get(this.lastNameField).type(lastName);
  }

  registration_personal_details_email() {
    const email = randomEmail();
    cy.get(this.emailField).type(email, { parseSpecialCharSequences: false });
    return email;
  }

  registration_personal_details_phone(phone) {
    cy.get(this.phoneField).type(phone);
  }

  registration_personal_details_fax(fax) {
    cy.get(this.faxField).type(fax);
  }

  registration_address_company(company) {
    cy.get(this.companyField).type(company);
  }

  registration_address_address1(address1) {
    cy.get(this.address1Field).type(address1);
  }

  registration_address_address2(address2) {
    cy.get(this.address2Field).type(address2);
  }

  registration_address_city(city) {
    cy.get(this.cityField).type(city);
  }

  registration_address_region(region) {
    cy.get(this.regionField).select(region);
  }

  registration_address_zipcode(zipcode) {
    cy.get(this.zipCodeField).type(zipcode);
  }

  registration_address_country(country) {
    cy.get(this.countryField).select(country);
  }

  registration_login_details_login() {
    const username = randomLogin();
    cy.get(this.loginNameField).type(username);
    return username;
  }

  registration_login_details_password(password) {
    cy.get(this.passwordField).type(password);
  }

  registration_login_details_confirm_password(passwordConfirmField) {
    cy.get(this.passwordConfirmField).type(passwordConfirmField);
  }

  registration_newsletter_subscribe() {
    cy.get(this.newsletterNo).check();
  }

  registration_accept_privacy_policy() {
    cy.get(this.aceptPrivacyPolicy).check();
  }

  registration_continue() {
    cy.get(this.continueRegistrationButton).click();
  }

  registration_validateFirstName(expectedFirstName) {
    cy.get(this.validateFirstName).should(
      "contain.text",
      `Welcome back ${expectedFirstName}`
    );
  }

  registration_error(fieldName, expectedError) {
    const selector = this[fieldName];
    expect(selector, `No selector found for ${fieldName}`).to.be.ok;

    cy.get(selector)
      .closest(".form-group")
      .find(".help-block")
      .should("be.visible")
      .and("contain.text", expectedError);
  }

  // if we can registered user in background
 registration_user_is_registered() {
  const user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode("#####"),
    region: "Bristol", // must match actual <option> text
    country: "United Kingdom",
    loginName: faker.internet.username().replace(/\W/g, "").slice(0,10),
    password: faker.internet.password({ length: 8 }),
  };

  Cypress.env("registeredUser", user);

  cy.visit("?rt=account/create");
  cy.get(this.registrationStartButton).click();
  cy.get(this.firstNameField).type(user.firstName);
  cy.get(this.lastNameField).type(user.lastName);
  cy.get(this.emailField).type(user.email, { parseSpecialCharSequences: false });
  cy.get(this.address1Field).type(user.address1);
  cy.get(this.cityField).type(user.city);
  cy.get(this.zipCodeField).type(user.zipCode);
  cy.get(this.regionField).select(user.region);
  cy.get(this.countryField).select(user.country);
  cy.get(this.loginNameField).type(user.loginName);
  cy.get(this.passwordField).type(user.password);
  cy.get(this.passwordConfirmField).type(user.password);
  cy.get(this.aceptPrivacyPolicy).check();
  cy.get(this.continueRegistrationButton).click();

  // return the plain object for later use
  return user;
}

}

export default RegistrationPage;
