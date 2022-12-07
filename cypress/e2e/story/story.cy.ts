import {Story} from "./story";
import {Login} from "../login/login";

const md5 = require('md5');

describe('Dado que necessito lista 5 story', () => {
    const date = new Date();
    const timestamp = date.getTime();
    let publicKey = String;
    let privateKey = String;
    let hash = String;


    context('Quando executo um busca na API enviando o Offset com valo 5', () => {

        beforeEach(() => {
            cy.fixture('keys').then((key) => {
                Login.login()
                cy.log(`**timestamp:** ${JSON.stringify(timestamp)}`);


                // publicKey = key.publickey;
                // privateKey = key.privatekey;
                publicKey = Cypress.env('publickey');
                privateKey = Cypress.env('privatekey');
                cy.log(`**key.publickey:** ${JSON.stringify(publicKey)}`);
                cy.log(`**key.publickey:** ${JSON.stringify(privateKey)}`);
                hash = md5(timestamp + privateKey + publicKey);
                cy.log(`**hash:** ${JSON.stringify(hash)}`);

            })

        })

        it('Então ao preencher ', () => {

            Story.Get(5, timestamp, publicKey, hash).should((response) => {
                cy.log(`**Response body:** ${JSON.stringify(response)}`);
                expect(response.status, '**Status**').eq(200)


            })
        })
    })

})
