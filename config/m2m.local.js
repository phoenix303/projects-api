// force using test.json for unit tests

let config;
if (process.env.NODE_ENV === 'test') {
  config = require('./test.json');
} else {
  config = {
    identityServiceEndpoint: "https://api.topcoder-dev.com/v3/",
    authSecret: 'secret',
    authDomain: 'topcoder-dev.com',
    logLevel: 'debug',
    captureLogs: 'false',
    logentriesToken: '',
    rabbitmqURL: 'amqp://dockerhost:5672',
    fileServiceEndpoint: 'https://api.topcoder-dev.com/v3/files/',
    directProjectServiceEndpoint: 'https://api.topcoder-dev.com/v3/direct',
    connectProjectsUrl: 'https://connect.topcoder-dev.com/projects/',
    memberServiceEndpoint: 'https://api.topcoder-dev.com/v3/members',
    dbConfig: {
      masterUrl: 'postgres://coder:mysecretpassword@dockerhost:5432/projectsdb',
      maxPoolSize: 50,
      minPoolSize: 4,
      idleTimeout: 1000,
    },
    elasticsearchConfig: {
      host: 'dockerhost:9200',
      // target elasticsearch 2.3 version
      apiVersion: '7.0',
      indexName: 'projects',
      docType: 'projectV5'
    },
    whitelistedOriginsForUserIdAuth: "[\"\"]",
  };
}
module.exports = config;
