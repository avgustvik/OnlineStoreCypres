import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import CommonPage from "../../pages/CommonPage";
import RegistrationPage from "../../pages/RegistrationPage";
import { createTestUser } from "../../support/api";

const loginPage = new LoginPage();

Given("User navigates to Login page", function () {
  loginPage.goTo(Cypress.env("url") + "?rt=account/login");
});

When("User enters a Login Name", function () {
  loginPage.login_enter_login(this.user.loginName);
});


When("User enters a password", function () {
  loginPage.login_enter_password(this.user.password);
});

When("User clicks on button Login", function () {
  loginPage.login_click();
});

Then("Text is My Account {string}", function (ignoredPlaceholder) {
  const expectedloginName = this.user.loginName;
  loginPage.login_get_text(expectedloginName);
});

Then("Alert message {string} should be shown", function (expectedMessage) {
  loginPage.getAlert()
    .should("be.visible")
    .and("contain.text", expectedMessage);
});
