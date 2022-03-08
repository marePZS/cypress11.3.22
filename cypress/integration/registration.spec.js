/// <reference types="cypress" />
const Locators = require("../fixtures/Locators.json");

describe('register user', ()=>{

    beforeEach('visit registration page', ()=> {
        cy.visit('/register');
        cy.url().should('contain', '/register');
    });

    it('without first-name', ()=>{ 
        cy.get(Locators.Register.lastName).type('Pzs');
        cy.get(Locators.commonElements.emailField).type('markopzs7@test.com');
        cy.get(Locators.commonElements.passwordField).type('password123');
        cy.get(Locators.Register.passwordConfirm).type('password123');
        cy.get(Locators.Register.checkBox).check();
        cy.get(Locators.commonElements.submitBtn).click();
        cy.get(Locators.Register.firstName).should('be.empty');
    });

    it('without last-name', ()=>{ 
        cy.get(Locators.Register.firstName).type('Marko');
        cy.get(Locators.commonElements.emailField).type('markopzs5@test.com');
        cy.get(Locators.commonElements.passwordField).type('password123');
        cy.get(Locators.Register.passwordConfirm).type('password123');
        cy.get(Locators.Register.checkBox).check();
        cy.get(Locators.commonElements.submitBtn).click();
        cy.get(Locators.Register.lastName).should('be.empty');
    });

    it('invalid email', ()=>{    
        cy.get(Locators.Register.firstName).type('Marko');
        cy.get(Locators.Register.lastName).type('Pzs');
        cy.get(Locators.commonElements.emailField).type('markopzs5@testcom');
        cy.get(Locators.commonElements.passwordField).type('password123');
        cy.get(Locators.Register.passwordConfirm).type('password123');
        cy.get(Locators.Register.checkBox).check();
        cy.get(Locators.commonElements.submitBtn).click();
        cy.get(Locators.commonElements.alert).should('have.class', 'alert');
    });
    
    it('already used email', ()=>{     
        cy.get(Locators.Register.firstName).type('Marko');
        cy.get(Locators.Register.lastName).type('Pzs');
        cy.get(Locators.commonElements.emailField).type('markopzs3@test.com');
        cy.get(Locators.commonElements.passwordField).type('password123');
        cy.get(Locators.Register.passwordConfirm).type('password123');
        cy.get(Locators.Register.checkBox).check();
        cy.get(Locators.commonElements.submitBtn).click();
        cy.get(Locators.commonElements.alert).should('have.class', 'alert'); 
    });

    it('password-confirmation invalid', ()=>{
        cy.get(Locators.Register.firstName).type('Marko');
        cy.get(Locators.Register.lastName).type('Pzs');
        cy.get(Locators.commonElements.emailField).type('markopzs5@test.com');
        cy.get(Locators.commonElements.passwordField).type('password123');
        cy.get(Locators.Register.passwordConfirm).type('password123333');
        cy.get(Locators.Register.checkBox).check();
        cy.get(Locators.commonElements.submitBtn).click();
        cy.get(Locators.commonElements.alert).should('have.class', 'alert'); 
    });

    // it('valid registration', ()=>{           // ------->  valid only once
    //     cy.get(Locators.Register.firstName).type('Marko');
    //     cy.get(Locators.Register.lastName).type('Pzs');
    //     cy.get(Locators.commonElements.emailField).type('markopzs5@test.com');
    //     cy.get(Locators.commonElements.passwordField).type('password123');
    //     cy.get(Locators.Register.passwordConfirm).type('password123');
    //     cy.get(Locators.Register.checkBox).check();
    //     cy.get(Locators.commonElements.submitBtn).click();
    // });

});