export default class LoginPage {

    get email() {
        return cy.get('#email');
    };

    get password(){
        return cy.get('#password');
    };

    get submitBtn(){
        return cy.get('button');
    };

    get logoutBtn(){
        return cy.get('.nav-link');
    }

    login(email, password){
        this.email.type(email);
        this.password.type(password);
        this.submitBtn.click();
    }
};

export const loginPage = new LoginPage();