class CommonPage {
  
  top_menu = "#customer_menu_top";
  top_menu_options = ".sub_menu.dropdown-menu";
  
  validateUrl(part) {
    cy.url().should("include", part);
  }

  hasHeaderText(expectedText) {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const cleanText = text.replace(/\s+/g, " ").trim();
        expect(cleanText).to.eq(expectedText);
      });
  }
  goTo(url) {
    return cy.visit(url);
  }

  user_logged_out(option) {
    cy.get(this.top_menu).trigger('mouseover');
     cy.get(this.top_menu_options)
    .contains(option)
    .click();
  }
}

export default CommonPage;
