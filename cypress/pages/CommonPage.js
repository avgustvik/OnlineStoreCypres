
class CommonPage {

    validateUrl(part) {
        cy.url().should('include', part);
    };

    hasHeaderText(expectedText) {
      cy.get('h1')
        .invoke('text')
        .then(text => {
          const cleanText = text.replace(/\s+/g, ' ').trim(); 
          expect(cleanText).to.eq(expectedText);
    });
  }
}

export default CommonPage;