const { json } = require('express');

const router = require('express').Router();

router.all('/', (req, res) => {
    res.send({
        swagger: '/doc/swagger',
        redoc: '/doc/redoc',
        json: '/doc/json'


    });
}); 

router.use('/json', (req, res) => {
    res.sendFile('/swagger.json', { root: __dirname + '/../' });

});

const redoc = require('redoc-express');
router.use('/redoc', redoc({
    title: 'API Documentation',
    specUrl: '/doc/json'
}))


const swaggerUI = require('swagger-ui-express');

router.use('/swagger', swaggerUI.serve, swaggerUI.setup(require('../swagger.json')));

module.exports = router;