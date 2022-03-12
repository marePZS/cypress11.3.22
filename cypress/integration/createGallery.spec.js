/// <reference types='cypress'/>
import { loginPage } from "../pageObjects/loginPOM";
import { faker } from "@faker-js/faker";
import { createGallery } from "../pageObjects/createGalleryPOM";


describe('create gallery', ()=>{
    
    let galleryId;

    let galleryData = {
        title: faker.name.title(),
        description: faker.lorem.sentence(),
        url: faker.image.imageUrl('.jpg')
    }

    beforeEach('log in to app', ()=>{
        //cy.registerViaBackend('marko', 'pzs8', 'markopzs8@test.com', 'password123');
        cy.loginViaBackend();
        
    })

    it('test backend register', ()=>{
        cy.visit('/create')
        cy.contains('Logout').should('be.visible');
        
    })

    it('visit create page', ()=>{

        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries',

        }).as('galleryCreation');

        cy.get('.nav-link').eq(2).click();
        createGallery.create(galleryData.title, galleryData.description, galleryData.url);
        cy.wait('@galleryCreation').then((interception) =>{
            console.log('ID', interception.response.body.id);
            expect(interception.response.statusCode).eq(201);
            galleryId = interception.response.body.id;

            cy.visit(`/galleries/${galleryId}`);
            cy.get('h1').should('have.text', galleryData.title);
        })
    });
    

});