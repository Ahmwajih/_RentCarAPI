const router = require('express').Router();

const authController = require('../controllers/auth');

router.route('/login')
    .post(authController.login);

router.route('/logout')
    .post(authController.logout);

module.exports = router;