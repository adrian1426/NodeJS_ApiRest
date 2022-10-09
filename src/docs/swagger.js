const swaggerJsDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Documentacion mi Api ahh',
    version: '1.0.0'
  },
  servers: [
    { url: 'http://localhost:3000/v1/api' }
  ]
};

const options = {
  swaggerDefinition,
  apis: [
    "./routes/*.js"
  ]
};

const openApiConfig = swaggerJsDoc(options);

module.exports = openApiConfig;
