/// <reference types="cypress" />
import {registerPage} from '../pageObjects/registrationPOM';
const {faker} = require("@faker-js/faker");

describe('register user', ()=>{

    let userData = {
        randomFirstName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        usedEmail: 'markopzs1@test.com',
        invalidEmail: 'markopzs1@testcom',
        randomPassword: faker.internet.password(),
        randomPassword2: faker.internet.password(),
    };

    beforeEach('visit registration page', ()=> {
        cy.visit('/register');
        cy.url().should('contain', '/register');
    });

    it('without first-name', ()=>{ 
        registerPage.register(' ',userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword);
        registerPage.firstName.should('be.empty');
    });

    it('without last-name', ()=>{ 
        registerPage.register(userData.randomFirstName,' ', userData.randomEmail, userData.randomPassword, userData.randomPassword);
        registerPage.lastName.should('be.empty');
    });

    it.only('invalid email', ()=>{    
        registerPage.register(userData.randomFirstName,userData.randomLastName, userData.invalidEmail, userData.randomPassword, userData.randomPassword);
        cy.url().should('contains', '/register');
        cy.get('p').should('have.class', 'alert').and('have.text', 'The email must be a valid email address.');
        //cy.get('p').should('have.text', 'The email must be a valid email address.');  //prebaceno u liniju iznad 
        registerPage.input.then((el) => {   //provera koliko input polja imamo na stranici
            console.log(el) 
            expect(el.length - 1).eq(5)
            expect(el.selector).to.eq('input')
        })
        
    });
    
    it('already used email', ()=>{     
        registerPage.register(userData.randomFirstName,userData.randomLastName, userData.usedEmail, userData.randomPassword, userData.randomPassword);
        registerPage.alert.should('have.class', 'alert');
    });

    it('password-confirmation invalid', ()=>{
        registerPage.register(userData.randomFirstName,userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword2);
        registerPage.alert.should('have.class', 'alert');
    });

    it('valid registration', ()=>{           
        registerPage.register(userData.randomFirstName,userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword);
    });

});