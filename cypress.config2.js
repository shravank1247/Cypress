const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ivyedw",
  include: ["node_modules/**/*"],
  defaultCommandTimeout: 10000,
  env:{
    url : "https://sgpundbavocet4.ad.sensiaglobal.com:444/login"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/AvocetTest_*.js',
    viewportHeight: 1080,
    viewportWidth: 1920,

  },
});
