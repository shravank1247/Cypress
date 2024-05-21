const { defineConfig } = require("cypress");
const sqlServer = require("cypress-sql-server")

module.exports = defineConfig({
  projectId: "fje62q",
  include: ["node_modules/**/*"],
  defaultCommandTimeout: 8000,
  env:{
    url : "https://sgpundbavocet4.ad.sensiaglobal.com:449/login"
  },

  //for html reports
  reporter: 'cypress-mochawesome-reporter', 
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        config.db = {
          userName: "sa",
          password: "Bus1n3ss",
          server: "10.21.1.32",
          options: {
              database: "Avocet10.2.2",
              encrypt: true,
              rowCollectionOnRequestCompletion : true
          }
      }

      //For report generation
      require('cypress-mochawesome-reporter/plugin')(on);

      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks);



    },
    specPattern: 'cypress/integration/examples/*.js',
    viewportHeight: 1080,
    viewportWidth: 1920,

  },
});
