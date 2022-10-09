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
      login: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
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
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js']
};

const openApiConfig = swaggerJsDoc(options);

module.exports = openApiConfig;
