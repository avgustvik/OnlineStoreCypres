import CommonPage from "./CommonPage";

class LoginPage extends CommonPage {
  loginName = "#loginFrm_loginname";
  password = "#loginFrm_password";
  loginButton = 'button[title="Login"]';
  login_text = ".heading1";
  allert_msg = ".alert.alert-error.alert-danger "

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
    cy.get(this.login_text)
        .invoke("text")
        .should("include", expectedText);
  }

  getAlert() {
    return cy.get(this.allert_msg);
  }
}

export default LoginPage;
