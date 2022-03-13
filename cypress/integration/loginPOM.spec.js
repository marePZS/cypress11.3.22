///<reference types="cypress"/>
import {loginPage} from '../pageObjects/loginPOM';
const {faker} = require("@faker-js/faker");

describe('login test POM', ()=>{

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    };

    before('visit login page', ()=>{
        cy.visit("/login");
    });

    it('login', ()=>{
        
        // loginPage.login(userData.randomEmail, userData.randomPassword);
        // cy.get('p').should('be.visible');
        // cy.get('p').should('have.css', 'border-color', 'rgb(245, 198, 203)');
        // cy.get('p').should('have.text', 'Bad Credentials');
        // cy.get('p').should('have.css', 'color', 'rgb(114, 28, 36)');
        // cy.get('p').should('have.class', 'alert');

        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as('loginRequest');

        //loginPage.login('markopzs1@test.com', 'password123');
        cy.loginViaBackend();

        cy.wait('@loginRequest').then((interceptObj) => {
            console.log(interceptObj.response.body.access_token)
            expect(interceptObj.response.statusCode).eq(200)

        })

    });

    xit('logout', ()=>{
        loginPage.logoutBtn.should('have.length', 4);
        //loginPage.logoutBtn.eq(3).click();
    });



});