import {Story} from "./story";

const md5 = require('md5');

describe('Dado que necessito lista 5 story', () => {
    const date = new Date();
    const timestamp = date.getTime();
    let publicKey = String;
    let privateKey = String;
    let hash = String;


    context('Quando executo um busca na API enviando o Offset com valo 5', () => {

        beforeEach(() => {
            cy.fixture('apiKey').then((apiKey) => {
                cy.log(`**timestamp:** ${JSON.stringify(timestamp)}`);

                publicKey = apiKey.publickey;
                privateKey = apiKey.privatekey;
                cy.log(`**hash:** ${JSON.stringify(publicKey)}`);
                cy.log(`**hash:** ${JSON.stringify(privateKey)}`);
                cy.log(`**hash:** ${JSON.stringify((timestamp + privateKey + publicKey))}`);

                hash = md5(timestamp + privateKey + publicKey);
                cy.log(`**hash:** ${JSON.stringify(hash)}`);

            })

        })


        it('Então ao preencher ', () => {


            Story.Get(1, timestamp, publicKey, hash).should((response) => {
                cy.log(`**Response body:** ${JSON.stringify(response.body)}`);
                expect(response.status, '**Status**').eq(200)


            })
        })
    })

})
