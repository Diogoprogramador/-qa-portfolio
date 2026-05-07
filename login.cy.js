/// <reference types="cypress" />

describe('Testes de Login - SauceDemo', () => {
  
  beforeEach(() => {
    cy.visit('/');
  });

  it('Caminho Feliz: Login com credenciais válidas', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Cenário de Exceção: Usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out');
  });

  it('Cenário de Exceção: Senha incorreta', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();
    
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

  it('Cenário de Exceção: Campos obrigatórios vazios', () => {
    cy.get('[data-test="login-button"]').click();
    
    cy.get('[data-test="error"]').should('contain', 'Username is required');
  });

  it('Cenário de Exceção: Usuário não existe', () => {
    cy.get('[data-test="username"]').type('usuario_inexistente');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

});
