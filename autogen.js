const swaggerAutogen = require('swagger-autogen')()

require('dotenv').config();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const packageJson = require('./package.json');

const doc = {
    info: {
        version: packageJson.version,
        title: packageJson.name,
        description: packageJson.description,
        termsOfService: '',
        contact: {
            name: packageJson.author,
            email: packageJson.email,
            url: packageJson.url
        },
        license: {
            name: packageJson.license,
            url: packageJson.url
        }
    },
    host: `${HOST}:${PORT}`,
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        { name: 'Users', description: 'API for users in the system' },
        { name: 'Cars', description: 'API for cars in the system' },
        { name: 'Reservations', description: 'API for reservations in the system' }
    ],
    securityDefinitions: {
        Token: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            description: 'Simple token based authentication'
        }
    },
    security: [
        { Token: [] }
    ],
    definitions: {
        "/auth/login":{
            username: {
                type: 'string',
                required: true
            },
            password: {
                type: 'string',
                required: true
            }
        }
    },
    externalDocs: {
        description: 'Find out more about Swagger',
        url: 'http://swagger.io'
    },
    "User": require('./models/users'),
    "Tokens": require('./models/tokens'),
    "Cars": require('./models/cars'),
    "Reservations": require('./models/reservations')
}


const routes = ['./app.js']

const outputFile = './swagger.json'

swaggerAutogen(outputFile, routes, doc)