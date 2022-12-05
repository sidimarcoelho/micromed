const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  viewportWidth: 1280,
  viewportHeight: 800,
  projectId: "micromed",
  responseTimeout: 10000,
  chromeWebSecurity: false,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://developer.marvel.com/account",
    specPattern: "cypress/e2e/**/*.cy.{ts,tsx}",
  },
});
