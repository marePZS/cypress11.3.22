export default class CreateGallery {

    get title(){
        return cy.get('#title');
    };

    get description(){
        return cy.get('#description');
    };

    get imageLink(){
        return cy.get('[type=url]');
    };

    get appendBtn(){
        return cy.get('button').eq(0);
    };

    get appendBtn(){
        return cy.get('button').eq(1);
    };

    get addImage(){
        return cy.get('button').eq(2);
    }

    get submitBtn(){
        return cy.get('button').eq(3);
    };

    get cancelBtn(){
        return cy.get('button').eq(4);
    };

    create(title, description, imageLink){
        this.title.type(title);
        this.description.type(description);
        this.imageLink.type(imageLink);
        this.submitBtn.click();
    }

}

export const createGallery = new CreateGallery();