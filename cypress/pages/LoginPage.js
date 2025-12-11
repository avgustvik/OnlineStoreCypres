import CommonPage from "./CommonPage";

class LoginPage extends CommonPage {
  loginName = "#loginFrm_loginname";
  password = "#loginFrm_password";
  loginButton = 'button[title="Login"]';
  login_text = ".heading1";
  allert_msg = ".alert.alert-error.alert-danger";
  allert_msg_success = ".alert.alert-success";
  forgotPasswordLink = 'a[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]';
  forgotLoginLink = 'a[href="https://automationteststore.com/index.php?rt=account/forgotten/loginname"]';
  forgotPasswordLoginName = "#forgottenFrm_loginname";
  forgotEmail = "#forgottenFrm_email";
  forgotPasswordContinueBtn = 'button[title="Continue"]';
  forgotLoginLastName = "#forgottenFrm_lastname";

  login_enter_login(login) {
    cy.get(this.loginName).type(login);
  }

  login_enter_password(password) {
    cy.get(this.password).type(password);
  }

  login_click() {
    cy.get(this.loginButton).click();
  }

  login_get_text(expectedText) {
    cy.get(this.login_text).invoke("text").should("include", expectedText);
  }

  getAlert() {
    return cy.get(this.allert_msg);
  }

  getAlertSuccess() {
    return cy.get(this.allert_msg_success);
  }

  forgotPassword() {
    cy.get(this.forgotPasswordLink).click();
  }

  forgotLogin() {
    cy.get(this.forgotLoginLink).click();
  }

  forgotpassword_setLoginName(loginName) {
    cy.get(this.forgotPasswordLoginName).type(loginName);
  }

  forgotpassword_setEmail(newEmail) {
    cy.get(this.forgotEmail).type(newEmail);
  }

  forgotpassword_setLastname(lastName) {
    cy.get(this.forgotLoginLastName).type(lastName);
  }

  forgot_continue() {
    cy.get(this.forgotPasswordContinueBtn).click();
  }
}

export default LoginPage;
