///<reference types="cypress" />

describe("GUI - Teste relacionado a produtos", () => {

    it("TC007 - Deve ser possível clicar no botão criar e abrir um modal", () => {

        //Visita a url
        cy.visit("http://127.0.0.1:5500/login.html");

        //Verificar se o texto esta impresso na tela
        cy.contains("Criar");
    });

    it("TC008 - Deve ser possível cadastrar um produto", () => {

        //Vistar a url
        cy.visit("http://127.0.0.1:5500/login.html");

        //Clica no botão para realizar uma ação
        cy.get("#btn-adicionar").click();
        cy.get("#btn-adicionar").click();

        //Escreve o produto para ser cadastrado
        cy.get("#codigo").type("001");
        cy.get("#nome").type("Arroz 1kg Mãe Márcia");
        cy.get("#quantidade").type("188");
        cy.get("#valor").type("R$ 5.89");
        cy.get("#data").type("2024-06-22");

        //Clicar no botãopara realizar uma ação
        cy.get("#btn-salvar").click();
        cy.get("#btn-sair").click();
        
    });

    it("TC009 - Deve ser possível cadastrar dois produto e exibi-los na tela", () => {

        //Vistar a url
        cy.visit("http://127.0.0.1:5500/login.html");

        //Clica no botão para realizar uma ação
        cy.get("#btn-adicionar").click();
        cy.get("#btn-adicionar").click();

        //Escreve o produto para ser cadastrado
        cy.get("#codigo").type("001");
        cy.get("#nome").type("Arroz 1kg Mãe Márcia");
        cy.get("#quantidade").type("188");
        cy.get("#valor").type("R$ 5.89");
        cy.get("#data").type("2024-06-22");

        //Clicar no botãopara realizar uma ação
        cy.get("#btn-salvar").click();

         //Escreve o produto para ser cadastrado
         cy.get("#codigo").type("002");
         cy.get("#nome").type("Feijão 1kg Mãe Márcia");
         cy.get("#quantidade").type("204");
         cy.get("#valor").type("R$ 3.89");
         cy.get("#data").type("2024-06-22");

        //Clicar no botãopara realizar uma ação
        cy.get("#btn-salvar").click();
       
        //Clicar no botãopara realizar uma ação
        cy.get("#btn-sair").click();
        
    });

   it("TC010 - Deve encontrar os textos impressos na tela", () => {

        //Visita a url
        cy.visit("http://127.0.0.1:5500/login.html");

         //Clica no botão para realizar uma ação
         cy.get("#btn-adicionar").click();
         cy.get("#btn-adicionar").click();
 
         //Escreve o produto para ser cadastrado
         cy.get("#codigo").type("001");
         cy.get("#nome").type("Arroz 1kg Mãe Márcia");
         cy.get("#quantidade").type("188");
         cy.get("#valor").type("R$ 5.89");
         cy.get("#data").type("2024-06-22");
 
         //Clicar no botãopara realizar uma ação
         cy.get("#btn-salvar").click();
 
          //Escreve o produto para ser cadastrado
          cy.get("#codigo").type("002");
          cy.get("#nome").type("Feijão 1kg Mãe Márcia");
          cy.get("#quantidade").type("204");
          cy.get("#valor").type("R$ 3.89");
          cy.get("#data").type("2024-07-22");
 
         //Clicar no botãopara realizar uma ação
         cy.get("#btn-salvar").click();
        
         //Clicar no botãopara realizar uma ação
         cy.get("#btn-sair").click();

         //Verificar se o texto esta impresso na tela
         cy.contains("001");
         cy.contains("002");
         cy.contains("Arroz 1kg Mãe Márci");
         cy.contains("Feijão 1kg Mãe Márcia");
         cy.contains("188");
         cy.contains("204");
         cy.contains("R$ 5.89");
         cy.contains("R$ 3.89");
         cy.contains("2024-06-22");
         cy.contains("2024-07-22");
   });

   
})