describe('Login Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.contains('Sign In').click();
    });

    it('Verifikasi tidak dapat login dengan user yang tidak terdaftar', () => {
        cy.contains('Sign In').click();
        cy.get('#email').type("user6@test.com");
        cy.get('#pass').type("zz66@@");
        cy.get('button[name="send"]').click();

        // Verifikasi error message 
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)
    });

    it('Verifikasi tidak dapat login dengan email yang salah ', () => {
        cy.contains('Sign In').click();
        cy.get('#email').type("user6@test.com");
        cy.get('#pass').type("zz66");
        cy.get('button[name="send"]').click();

        // Verifikasi error message 
        cy.get('.message-error > div').should('be.visible');
        cy.wait(500)

    });

    it('Verifikasi tidak dapat login dengan password yang salah', () => {
        cy.contains('Sign In').click();
        cy.get('#email').type("user6@test.com");
        cy.get('#pass').type("zz66");
        cy.get('button[name="send"]').click();

        // Verifikasi error message 
        cy.get('.message-error > div').should('be.visible');
    });
    // Add more test cases to verify other scenarios related to login.
});

