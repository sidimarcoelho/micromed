const fakerdate = require('faker');

describe('Dado que estou na tela criação de usuário', () => {

    context('Quando preencho todos os campos e finalizo a criação', () => {
        it('Então ao preencher ', {includeShadowDom: true},() => {
            cy.visit('/').then(() => {
                cy.enter('#oneid-iframe').then(getBory => {
                    getBory().find("#BtnCreateAccount").click()
                    var faker = require('faker-br');
                    getBory().find('#InputFirstName').type(faker.name.firstName())
                    getBory().find('#InputLastName').type(faker.name.lastName())
                    getBory().find('#InputEmail').type(faker.internet.email())
                    getBory().find('#password-new').type(faker.internet.password())
                    getBory().find('input[data-testid^="LOCATION_"]').click({force: true})
                    getBory().find('input[data-testid^="BU_*_LOCATION"]').click({force: true})
                    // getBory().find('[data-testid="InputDOB"]').type(`${fakerdate.datatype.number({min:10,max:29}) }`)
                    getBory().find('[data-testid="InputDOB"]').clear({force: true,}).type('11112010')

                    getBory().find('button#BtnSubmit').click()


                })

            })
        })
    })
})
