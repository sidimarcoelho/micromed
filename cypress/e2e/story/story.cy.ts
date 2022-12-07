import {Story} from "./story";
import {Login} from "../login/login";

const md5 = require('md5');

describe('Dado que necessito lista 5 story', () => {
    const date = new Date();
    const timestamp = date.getTime();
    let publicKey = String;
    let hash = String;


    context('Quando executo um busca na API enviando o Offset com valo 5', () => {

        before(() => {
            cy.fixture('keys').then((key) => {
                // Login.login()
                // publicKey = key.publickey;
                let privateKey = key.privatekey;

                publicKey = Cypress.env('publickey');

                hash = md5(timestamp + privateKey + publicKey);

            })

        })

        it('Então deve retornar sucesso', () => {

            Story.Get(5, timestamp, publicKey, hash).should((response) => {
                expect(response.body.status, '**Code**').eq("Ok")
                expect(response.body.code, '**Status**').eq(200)


            })
        })

        it('Então deve retornar de 5 resultados', () => {

            Story.Get(5, timestamp, publicKey, hash).should((response) => {
                cy.log(`**Response body:** ${JSON.stringify(response.body.data)}`);
                expect(response.body.data.limit, '**Limite**').eq(5)
                expect(response.body.data.count, '**Count**').eq(5)
                expect(response.body.data.results, '**Results**').to.length(5)

            })
        })

        it('Então deve exibir no log o titulo de 5 story', () => {

            Story.Get(5, timestamp, publicKey, hash).should((response) => {
                for (let responseKey in response.body.data.results) {
                    cy.log(`**title:** ${JSON.stringify(response.body.data.results[responseKey].title)}`);

                }

            })
        })
    })

})
