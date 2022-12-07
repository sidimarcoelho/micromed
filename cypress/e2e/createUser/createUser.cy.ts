import {CreateUsers} from "./createUsers";

describe('Dado que estou na tela criação de usuário', () => {

    context('Quando preencho todos os campos e finalizo a criação', () => {
        it('Então ao preencher ', () => {
            cy.visit('/').then(() => {
                CreateUsers.fillFields()
            })
        })
    })
})
