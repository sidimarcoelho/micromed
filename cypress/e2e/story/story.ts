export class Story {

    public static Get(offset: number, publicKey: any, timestamp: any, hash: any) {
        return cy.request(`${Cypress.env('API')}/v1/public/stories?offset=${offset}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
    }
}