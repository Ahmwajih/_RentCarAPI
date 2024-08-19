const router = require('express').Router();


const auth = require('./auth') 
const users = require('./users')
const tokens = require('./tokens')


router.use('/auth', auth)
router.use('/users', users)
router.use('/tokens', tokens)


module.exports = router;