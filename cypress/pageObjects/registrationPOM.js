export default class RegisterPage {

    get firstName(){
        return cy.get('#first-name');
    };

    get lastName(){ 
        return cy.get('#last-name');
    };

    get email(){
        return cy.get('#email');
    };

    get password(){
        return cy.get('#password');
    };

    get passwordConfirm(){
        return cy.get('#password-confirmation');
    };

    get checkBox(){
        return cy.get(':checkbox');
    };

    get submitBtn(){
        return cy.get('button');
    };

    get input(){
        return cy.get('input');
    }

    // get alert(){
    //     return cy.get('.alert');
    // };

    register(firstName, lastName, email, password, passwordConfirm){
        this.firstName.type(firstName);
        this.lastName.type(lastName);
        this.email.type(email);
        this.password.type(password);
        this.passwordConfirm.type(passwordConfirm);
        this.checkBox.check();
        this.submitBtn.click();
    };

};

export const registerPage = new RegisterPage();