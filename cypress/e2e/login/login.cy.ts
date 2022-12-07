const fakerdate = require('faker');

describe('Dado que estou na tela criação de usuário', () => {

    context('Quando preencho todos os campos e finalizo a criação', () => {
        it('Então ao preencher ', {includeShadowDom: true}, () => {
            cy.visit('/').then(() => {
                cy.enter('#oneid-iframe').then(getBory => {
                    getBory().find("#BtnCreateAccount").click()
                    var faker = require('faker-br');
                    var date = "16/12/1984";
                    getBory().find('input#InputDOB').invoke('value',date)
                    getBory().find('#InputFirstName').type(faker.name.firstName())
                    getBory().find('#InputLastName').type(faker.name.lastName())
                    getBory().find('#InputEmail').type(faker.internet.email())
                    getBory().find('#password-new').type(faker.internet.password())
                    getBory().find('input[data-testid^="LOCATION_"]').click({force: true})
                    getBory().find('input[data-testid^="BU_*_LOCATION"]').click({force: true})
                    // getBory().find('span[class="mask"]').invoke('remove')
                    // getBory().find('input#InputDOB').type(date,{force:true})
                    getBory().find('button#BtnSubmit').click()

                })

            })
        })
    })
})
