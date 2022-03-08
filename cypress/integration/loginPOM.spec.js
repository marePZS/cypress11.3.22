///<reference types="cypress"/>
import {loginPage} from '../pageObjects/loginPOM';
const {faker} = require("@faker-js/faker");

describe('login test POM', ()=>{

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    };

    before('visit gallery page', ()=>{
        cy.visit("/login");
    });

    it('click on the login button', ()=>{
        
        loginPage.login(userData.randomEmail, userData.randomPassword);
        cy.get('p').should('be.visible');
        cy.get('p').should('have.css', 'border-color', 'rgb(245, 198, 203)');
        cy.get('p').should('have.text', 'Bad Credentials');
        cy.get('p').should('have.css', 'color', 'rgb(114, 28, 36)');
        cy.get('p').should('have.class', 'alert');

    });

    xit('logout', ()=>{
        loginPage.logoutBtn.should('have.length', 4);
        loginPage.logoutBtn.eq(3).click();
    });



});