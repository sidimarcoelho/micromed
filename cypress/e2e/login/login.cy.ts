describe('Dado que estou na tela criação de usuário', () => {

  context('Quando preencho todos os campos e finalizo a criação', () => {
        it('Então ao preencher ', () => {
            cy.visit('/').then(()=>{
                cy.enter('#oneid-iframe').then(getBory =>{
                    getBory().find("#BtnCreateAccount").click()
                    var faker = require('faker-br');
                    getBory().get('[data-testid="checkbox-show-pw-wrapper"]').then(()=>{
                        getBory().find('#checkbox-show-pw').click()
                    })

                    getBory().find('#InputFirstName').type(faker.name.firstName())
                    getBory().find('#InputLastName').type(faker.name.lastName())
                    getBory().find('#InputEmail').type(faker.internet.email())
                    getBory().find('#password-new').type(faker.internet.password())
            })

                // getBory().find('#InputDOB').type("1612984")
            })
        })
    })
})
