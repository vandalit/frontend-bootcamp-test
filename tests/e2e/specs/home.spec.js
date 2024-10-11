describe('HomeView', () => {
    it('visits the home page', () => {
      cy.visit('/');
      cy.contains('Welcome');
    });
  });
  