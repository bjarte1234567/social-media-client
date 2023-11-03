

describe('The user can log in and access their profile', () => {
  it('logs in and accesses the user profile', () => {
    cy.visit('/index.html');
    cy.title().should('include', 'Test Clients');

    cy.get('#loginEmail').type('bjarte@stud.noroff.no');
    cy.get('#loginPassword').type('Noroff12345');
    cy.get('#loginForm').submit();

    cy.contains('Logout').should('be.visible');
    cy.contains('Create Profile').should('exist');

    cy.get('.btn-success').eq(0).click();
  });
});
