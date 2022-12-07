export class Login {

    public static login() {
        cy.visit('/').then(() => {

            cy.enter('#oneid-iframe').then(getBory => {
                getBory().find('[data-testid="InputLoginValue"]').type(Cypress.env('username'))
                getBory().find('input#InputPassword').type(Cypress.env('password'))
                getBory().find('button#BtnSubmit').click()
                cy.get('.apikey:nth-child(2)').then(($key) => {
                    cy.log(`**pubKey:** ${JSON.stringify($key.text())}`);
                    cy.writeFile('cypress/fixtures/keys.json', {publickey: $key.text()})
                })

                cy.get('.apikey:nth-child(4)').then(($key) => {
                    cy.log(`**privatekey:** ${JSON.stringify($key.text())}`);
                    cy.writeFile('cypress/fixtures/keys.json', {privatekey: $key.text()})

                })

                // cy.log(`**publickey:** ${JSON.stringify(pubKey)}`);
                // cy.log(`**privatekey:** ${JSON.stringify(privKey)}`);

                // cy.writeFile('cypress/fixtures/keys.json', {publickey: pubKey, privatekey: privKey})


            })
        })

    }
}