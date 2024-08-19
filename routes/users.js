const router = require('express').Router();

const userController = require('../controllers/users');


router.route('/user')
    .get(userController.list)
    .post(userController.create);

router.route('/user/:id')
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;