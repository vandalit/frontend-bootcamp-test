describe('HomeView Page', () => {
    it('visits the home page', () => {
      cy.visit('/');
      cy.contains('h1', 'Home Page');
    });
  });
  