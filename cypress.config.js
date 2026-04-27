const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "oacgoo",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
