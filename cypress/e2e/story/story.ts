export class Story {

    public static Get(offset: number, publicKey: any, timestamp: any, hash: any) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('API')}/v1/public/stories?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
            failOnStatusCode: false

        })
    }
}