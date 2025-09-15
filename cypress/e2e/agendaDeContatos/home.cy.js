/// <reference types="cypress" />

describe('Teste para o home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve adicionar novo contato', () => {
        cy.get('[type="text"]').type('Sulivan')
        cy.get('[type="email"]').type('Sulivan@gmail.com')
        cy.get('[type="tel"]').type('4002 8922')
        cy.get('.adicionar').click()
    })

    it('Editar contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('Souza')
        cy.get('[type="email"]').type('.br')
        cy.get('[type="tel"]').type(' 22')
        cy.get('.alterar').click()
    })

    it('Remover contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })

})