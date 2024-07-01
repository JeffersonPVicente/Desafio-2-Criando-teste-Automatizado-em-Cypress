///<reference types="cypress" />

describe('GUI - Testes relacionados ao login', () => {

    it('TC001 - Não deve ser possível efetuar o login sem informar email e senha. ', () => {

        //visitar a url
        cy.visit("http://127.0.0.1:5500/login.html");
        http://localhost/sistema/login.html
        //Escreve o usuário e senha
        cy.get('#email').type(" ");
        cy.get('#senha').type(" ");
        
        //Clica no botão para realizar uma ação
        cy.get('#btn-entrar').click();

        //Verificar se o texto esta impresso na tela
        cy.contains("Informe usuário e senha, os campos não podem ser brancos.");
    });

    it("TC002 - Não deve ser possível efetuar o login sem informar email e informar a senha correta", () => {

        //visitar a url
        cy.visit("http://127.0.0.1:5500/login.html");

        //Escrever o usuário e senha
        cy.get("#email").type(" ");
        cy.get("#senha").type("admin@123");

        //Clicar no botão para realizar uma ação
        cy.get("#btn-entrar").click();

        //Verificar se o texto esta impresso na tela
        cy.contains("Informe usuário e senha, os campos não podem ser brancos.");
    });

    it("TC003 - Não deve ser possível efetuar o login informando o usuário correto e não informar a senha", () => {

        //Visitar a url
        cy.visit("http://127.0.0.1:5500/login.html");

        //Escrever o usuário e senha
        cy.get("#email").type("admin@admin.com");
        cy.get("#senha").type(" ");

        //Clicar no botão para realizar uma ação
        cy.get("#btn-entrar").click();

        //Verificar se o texto esta impresso na tela
        cy.contains("E-mail ou senha inválidos");
    });

    it("TC004 - Não deve ser possível efetuar login informando login correto e senha incorreto", () => {

        //Visitar a url
        cy.visit("http://127.0.0.1:5500/login.html");

        //Escrever o usuário e senha
        cy.get("#email").type("admin@admin.com");
        cy.get("#senha").type("incorreto");

        //Clicar no botão para realizar uma ação
        cy.get("#btn-entrar").click();

        //Verificar se o texto esta impresso na tela
        cy.contains("E-mail ou senha inválidos");

    });

    it("TC005 - Não deve ser possível efetuar login informando o login incorreto e senha correta", () => {

        //Visitar a url
        cy.visit("http://127.0.0.1:5500/login.html");

        //Escrever usuário e senha
        cy.get("#email").type("incorreto@email.com");
        cy.get("#senha").type("admin@123");

        //Clicar no botão para realizar uma ação
        cy.get("#btn-entrar").click();

        //Verificar se o texto esta impresso na tela
        cy.contains("E-mail ou senha inválidos");
    });

    it("TC006 - Deve ser possível efetuar login informando o usuário e senha corretos", () => {

        //Visitar a url
        cy.visit("http://127.0.0.1:5500/login.html");

        //Escrever o usuário e senha
        cy.get("#email").type("admin@admin.com");
        cy.get("#senha").type("admin@123");

        //Clicar no botão para realizar uma ação
        cy.get("#btn-entrar").click();

    });


})