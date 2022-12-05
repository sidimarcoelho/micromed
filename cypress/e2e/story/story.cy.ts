import {Story} from "./story";

describe('Dado que necessito lista 5 story', () => {
    context('Quando executo um busca na API enviando o Offset com valo 5', () => {
        it('Então ao preencher ', () => {
            cy.fixture('apiKey').then((apiKey) => {
                Story.Get(5,apiKey).should((response) =>{
                    cy.log(`**Response body:** ${JSON.stringify(response.body)}`);

                })
            })

        })
    })

})
