/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Fariz')
        cy.get('[placeholder ="Email"][type="text"]').type('Farizirawanto@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('Farizirawantp@gmail.com')
        cy.get('#inputPassword2').type('Fariz')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('Farizirawanto@gmail.com')
        cy.get('#exampleInputPassword1').type('Fariz')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('Fariz')
        cy.get('[placeholder="Subject"]').type('Tugas cypress PPL')
        cy.get('[placeholder="Message"').type('Mengerjakan Project Cypress')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('mo')
        cy.get('#inputLastName').type('fariz')
        cy.get('#inputEmail').type('farizirawanto@gmail.com')
        cy.get('#inputWebsite').type('www.wikipedia.org')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('farizirawanto@gmail.com')
        cy.get('#inputPassword3').type('faris')
        cy.get('.custom-checkbox').last().click()
    })

});