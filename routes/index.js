const router = require('express').Router();


const auth = require('./auth') 
const users = require('./users')
const tokens = require('./tokens')
const cars = require('./cars')
const Reservations = require('./reservations')


router.use('/auth', auth)
router.use('/users', users)
router.use('/tokens', tokens)
router.use('/cars', cars)
router.use('/reservations', Reservations)


module.exports = router;
