describe('Magento Website Test - Home Page', () => {
  it('Should visit the homepage and check the title', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.title().should('include', 'Home page');
  });
});