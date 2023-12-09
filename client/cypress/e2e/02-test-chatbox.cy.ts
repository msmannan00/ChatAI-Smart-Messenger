describe('Dashboard Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display the chatbox and input elements', () => {
    cy.get('.messages-container').should('exist');
    cy.get('.input-group-lg').should('exist');
    cy.get('.messenger-style').should('exist');
  });

  it('should type in the input field and send messages by clicking the "send" button', () => {
    const messages = ['Test message 1', 'Test message 2', 'Test message 3'];

    for (const message of messages) {
      cy.get('#messenger')
        .type(message)
        .should('have.value', message);

      cy.get('#send').click();

      cy.wait(3000);

      cy.get('.messages-container').contains(message).should('exist');
    }
  });

  it('should click "New chat" button and verify single message after 3 seconds', () => {
    cy.get('#new-chat').click();

    cy.wait(3000);

    cy.get('.messages-container app-message-display').should('have.length', 1);
  });

  it('should disable "New chat" button when loading-circle is visible', () => {
    const message = 'Test message 1';
    cy.get('#messenger')
      .type(message)
      .should('have.value', message);

    cy.get('#send').click();

    cy.get('#loading').should('exist').then(() => {
      cy.get('#new-chat').should('be.disabled');
    });
  });

  it('should not show hamburger in desktop mode', () => {
    cy.viewport(1200, 800);
    cy.get('.hamburger-icon').should('exist');
  });

  it('should take screenshots in mobile and desktop modes', () => {
    cy.viewport('iphone-6');
    cy.screenshot('mobile-mode');

    cy.viewport(1200, 800);
    cy.screenshot('desktop-mode');
  });

});
