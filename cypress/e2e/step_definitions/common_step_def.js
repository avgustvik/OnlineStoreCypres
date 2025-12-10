import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CommonPage from "../../pages/CommonPage";
import { createTestUser } from "../../support/api";

const commonPage = new CommonPage();
Then("User is redirected to {string} page", function (page) {
  commonPage.validateUrl(page);
});

Then("Header text is {string}", function (expectedText) {
  commonPage.hasHeaderText(expectedText);
});

Given("a user account exists - api", function () {
  return createTestUser().then((user) => {
    this.user = user;
  });
});

When("User logs out via {string}", function (option) {
  commonPage.user_logged_out(option);
});
