import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CommonPage from "../../pages/CommonPage";

const commonPage = new CommonPage();
Then('User is redirected to {string} page', function(page) {
    commonPage.validateUrl(page)
});

Then('Header text is {string}', function(expectedText) {
  commonPage.hasHeaderText(expectedText)
});

