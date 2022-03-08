/// <reference types='cypress'/>
import { loginPage } from "../pageObjects/loginPOM";
import { faker } from "@faker-js/faker";
import { createGallery } from "../pageObjects/createGalleryPOM";


describe('create gallery', ()=>{

    let galleryData = {
        title: faker.name.title(),
        description: faker.lorem.sentence(),
        url: faker.image.imageUrl('.jpg')
    }

    

    it('visit create page', ()=>{
        cy.visit('/create')
        loginPage.login('markopzs1@test.com', 'password123');
        cy.wait(1000);
        cy.get('.nav-link').eq(2).click();
        createGallery.create(galleryData.title, galleryData.description, galleryData.url);
    });
    

});