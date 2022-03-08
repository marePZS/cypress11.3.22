///<reference types="cypress"/>
const Locators = require("../fixtures/Locators.json");
const {faker} = require("@faker-js/faker");

describe('login test', ()=>{

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    };

    before('visit gallery page', ()=>{
        cy.visit("/");
    });

    it('click on the login button', ()=>{
        //cy.get('a[href="/login"]').click();
        cy.get(Locators.Header.button).eq(1).click();
        cy.get(Locators.commonElements.emailField).type(userData.randomEmail);
        cy.get(Locators.commonElements.passwordField).type(userData.randomPassword);
        cy.get(Locators.commonElements.submitBtn).click();        
    });

    it('logout', ()=>{
        //cy.wait(1000); cekamo da se ucita
        cy.get(Locators.Header.button).should('have.length', 4);
        cy.get(Locators.Header.button).eq(3).click();
    });



});