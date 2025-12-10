before(function () {
  cy.fixture('user').then((user) => {
    this.user = user;
    cy.log(`Loaded user: ${user.loginName}`);
  });
});
