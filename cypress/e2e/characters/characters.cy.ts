import {Characters} from "./characters";

const md5 = require('md5');

describe('Dado que necessito pesquisar um characters', () => {
    const date = new Date();
    const timestamp = date.getTime();
    let publicKey = String;
    let hash = String;


    context('Quando executo um busca na API enviando o characterId', () => {

        before(() => {
            cy.fixture('keys').then((key) => {
                // Login.login()
                // publicKey = key.publickey;
                let privateKey = key.privatekey;

                publicKey = Cypress.env('publickey');

                hash = md5(timestamp + privateKey + publicKey);

            })

        })

        it('Então quando enviado 1011198 deve retornar "Agents of Atlas"', () => {

            Characters.Get("1011198", timestamp, publicKey, hash).should((response) => {
                cy.log(`**Response body:** ${JSON.stringify(response.body.data)}`);

                expect(response.body.status, '**Code**').eq("Ok")
                expect(response.body.code, '**Status**').eq(200)
                expect(response.body.data.results[0].name, '**Names**').eq("Agents of Atlas")


            })
        })

        it('Então quando enviado 1011297 deve retornar "Agent Brand"', () => {

            Characters.Get("1011297", timestamp, publicKey, hash).should((response) => {
                cy.log(`**Response body:** ${JSON.stringify(response.body.data)}`);

                expect(response.body.status, '**Code**').eq("Ok")
                expect(response.body.code, '**Status**').eq(200)
                expect(response.body.data.results[0].name, '**Names**').eq("Agent Brand")


            })
        })

        it('Então quando enviado 1011456 deve retornar "Balder"', () => {

            Characters.Get("1011198", timestamp, publicKey, hash).should((response) => {
                cy.log(`**Response body:** ${JSON.stringify(response.body.data)}`);

                expect(response.body.status, '**Code**').eq("Ok")
                expect(response.body.code, '**Status**').eq(200)
                expect(response.body.data.results[0].name, '**Names**').eq("Agents of Atlas")


            })
        })

    })
    context('Quando executo um busca na API enviando o characterId que não existe', () => {

        before(() => {
            cy.fixture('keys').then((key) => {
                // Login.login()
                // publicKey = key.publickey;
                let privateKey = key.privatekey;

                publicKey = Cypress.env('publickey');

                hash = md5(timestamp + privateKey + publicKey);

            })

        })

        it('Então quando enviado null deve retornar erro', () => {

            Characters.Get(null, timestamp, publicKey, hash).should((response) => {
                cy.log(`**Response body:** ${JSON.stringify(response.body)}`);

                expect(response.body.code, '**Status**').eq(404)
                expect(response.body.status, '**Code**').eq("We couldn't find that character")

            })
        })
        it('Então quando enviado undefined deve retornar erro', () => {

            Characters.Get(undefined, timestamp, publicKey, hash).should((response) => {
                cy.log(`**Response body:** ${JSON.stringify(response.body)}`);

                expect(response.body.code, '**Status**').eq(404)
                expect(response.body.status, '**Code**').eq("We couldn't find that character")

            })
        })
        it('Então quando enviado texto deve retornar erro', () => {

            Characters.Get("teste", timestamp, publicKey, hash).should((response) => {
                cy.log(`**Response body:** ${JSON.stringify(response.body)}`);

                expect(response.body.code, '**Status**').eq(404)
                expect(response.body.status, '**Code**').eq("We couldn't find that character")

            })
        })

    })

})
