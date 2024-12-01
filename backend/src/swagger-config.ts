import { usersSchema } from './services/users/users.schema'

export const swaggerConfig = {
  definition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'FeathersJS API', // API Title
      version: '1.0.0', // API version
      description: 'A FeathersJS API documentation using Swagger'
    },
    servers: [
      {
        url: 'http://localhost:3030' // Your API base URL
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer'
        }
      },
      schemas: {
        Users: usersSchema
      }
    },
    security: [{ BearerAuth: [] }]
  },
  apis: ['./src/services/**/*.ts'] // Path to your TypeScript service files
}
