export class CreateUsers {
    public static fillFields() {
        cy.enter('#oneid-iframe').then(getBory => {
            getBory().find("#BtnCreateAccount").click()
            var faker = require('faker-br');
            var date = "12/16/1984";
            getBory().find('#InputFirstName').type(faker.name.firstName())
            getBory().find('#InputLastName').type(faker.name.lastName())
            getBory().find('#InputEmail').type(faker.internet.email())
            getBory().find('#password-new').type(faker.internet.password())
            getBory().find('input[data-testid^="LOCATION_"]').click({force: true})
            getBory().find('input[data-testid^="BU_*_LOCATION"]').click({force: true})
            // getBory().find('span[class="mask"]').invoke('remove')
            getBory().find('input#InputDOB').type(date, {force: true})
            getBory().find('button#BtnSubmit').click()

        })

    }
}