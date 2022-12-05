export class Story {

    public static Get(offset: number, apyKey: any) {
        return cy.request({
            method: 'GET',
            url: `https://gateway.marvel.com:443/v1/public/stories?offset=${offset}&apikey=${apyKey.publickey}&hash=${apyKey.md5Key}`

        })
    }
}