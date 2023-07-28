// cypress/integration/registration_spec.js

describe('User Registration Test', () => {
  it('Should register a new user', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'user1@gmail.com';
    const password = 'Password123';

    cy.visit('https://magento.softwaretestingboard.com/');
    cy.contains('Create an Account').click();

    cy.url().should('include', '/customer/account/create/');

    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password)

    cy.get('button').click()

    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
    cy.url().should('include', '/customer/account/');
  });
});
