export class Login {
    public static login() {
        cy.visit('/').then(() => {

            cy.fixture('keys').then((key) => {

                cy.enter('#oneid-iframe').then(getBory => {
                    let publickey
                    let privatekey
                    getBory().find('[data-testid="InputLoginValue"]').type(Cypress.env('username'))
                    getBory().find('input#InputPassword').type(Cypress.env('password'))
                    getBory().find('button#BtnSubmit').click()
                    cy.get('.apikey:nth-child(2)').then(($key) => {
                        cy.log(`**key:** ${JSON.stringify($key.text())}`);
                        publickey = $key.text()
                    })
                    cy.get('.apikey:nth-child(4)').then(($key) => {
                        cy.log(`**key:** ${JSON.stringify($key.text())}`);
                        privatekey = $key.text()
                    })
                    cy.writeFile('cypress/fixtures/keys.json', {publickey: publickey,privatekey: privatekey})


                })
            })
        })

    }
}