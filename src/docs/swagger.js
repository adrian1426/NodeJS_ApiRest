const swaggerJsDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Documentacion mi Api ahh',
    version: '1.0.0'
  },
  servers: [
    { url: 'http://localhost:3000/v1/api' }
  ],
  components: {
    schemas: {
      track: {
        type: 'object',
        required: ['name', 'album'],
        properties: {
          name: {
            type: 'string'
          },
          album: {
            type: 'string'
          },
          cover: {
            type: 'string'
          },
          artista: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              },
              nickname: {
                type: 'string'
              },
              nationality: {
                type: 'string'
              }
            }
          },
          duration: {
            type: 'object',
            start: {
              name: {
                type: 'integer'
              },
              end: {
                type: 'integer'
              }
            }
          },
          mediaId: {
            type: 'string'
          }
        }
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: [
    "./routes/*.js"
  ]
};

const openApiConfig = swaggerJsDoc(options);

module.exports = openApiConfig;
