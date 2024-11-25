const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'http://127.0.0.1:8000',
    viewportHeight: 900,
    viewportWidth: 1200,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      

      // implement node event listeners here
    },
  },
});
