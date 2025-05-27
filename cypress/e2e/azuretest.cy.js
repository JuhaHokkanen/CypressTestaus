describe('Nice Water Application', () => {
  beforeEach(() => {
    // Visit the application before each test
    cy.visit('https://nice-water-06b68ed03.6.azurestaticapps.net');
  });

  it('loads the homepage successfully', () => {
    // Verify that the root URL returns HTTP 200 (implicitly by visiting)
    cy.location('pathname').should('eq', '/');
  });


  it('logs in with valid credentials', () => {
    // Fill in login form
    cy.get('input[placeholder="Username"]').type('erik');
    cy.get('input[placeholder="Password"]').type('erik');
    cy.get('input[placeholder="Confirm Password"]').type('erik');
    // Submit the form
    cy.get('input[type="submit"][value="Login"]').click();
    // Verify successful login by checking for Northwind Corporation text
    cy.contains('Northwind Corporation').should('be.visible');
    cy.get('a[data-rr-ui-event-key="/products"]').contains('Tuotteet').click();
    // Verify Add new button is visible and clickable
    cy.get('button').contains('Add New Product').should('be.visible').click();
    // Verify the product form appears
    cy.get('input[placeholder="Product name"]').should('be.visible').type('Test Product');
    cy.get('input[placeholder="Quantity per unit"]').should('be.visible').type('10 boxes');
    cy.get('input[placeholder="Unit price"]').should('be.visible').type('19.99');
    cy.get('input[placeholder="Units in stock"]').should('be.visible').type('100');

    // Submit the new product form
    cy.get('input[type="submit"][value="save"]').click();

    // Verify the new product appears in the list/table
    cy.contains('Test Product').should('be.visible');
  });

  it('Login and search customer', () => {
// Fill in login form
    cy.get('input[placeholder="Username"]').type('erik');
    cy.get('input[placeholder="Password"]').type('erik');
    cy.get('input[placeholder="Confirm Password"]').type('erik');
    // Submit the form
    cy.get('input[type="submit"][value="Login"]').click();
    // Verify successful login by checking for Northwind Corporation text
    cy.contains('Northwind Corporation').should('be.visible');
    cy.get('a[data-rr-ui-event-key="/customers"]').contains('Customers').click();
    cy.get('nobr[style="cursor: pointer;"]').contains('Customers').should('be.visible').click();
    cy.get('h4').contains('Alfreds Futterkiste').should('be.visible');
  });
  it('Login and try laskuri', () => {
// Fill in login form
    cy.get('input[placeholder="Username"]').type('erik');
    cy.get('input[placeholder="Password"]').type('erik');
    cy.get('input[placeholder="Confirm Password"]').type('erik');
    // Submit the form
    cy.get('input[type="submit"][value="Login"]').click();
    // Verify successful login by checking for Northwind Corporation text
    cy.contains('Northwind Corporation').should('be.visible');
    cy.get('a[data-rr-ui-event-key="/laskuri"]').contains('Laskuri').click();
    cy.get('button').contains('+').should('be.visible').click();
    cy.get('h3').contains('1').should('be.visible');
    cy.get('button').contains('-').should('be.visible').click();
    cy.get('h3').contains('0').should('be.visible');
    cy.get('button').contains('+').should('be.visible').click();
    cy.get('button').contains('+').should('be.visible').click();
    cy.get('button').contains('Reset').should('be.visible').click();
    cy.get('h3').contains('0').should('be.visible');
  });

});
