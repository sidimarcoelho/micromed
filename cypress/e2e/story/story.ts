export class Story {

    public static Get(offset: number,timestamp: any, publicKey: any,  hash: any) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('API')}/v1/public/stories?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
            failOnStatusCode: false

        })
    }
}