export class Characters {

    public static Get(characters: String,timestamp: any, publicKey: any,  hash: any) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('API')}/v1/public/characters/${characters}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
            failOnStatusCode: false

        })
    }
}