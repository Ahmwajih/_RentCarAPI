const router = require('express').Router();

const userController = require('../controllers/users');


router.route('/')
    .get(userController.list)
    .post(userController.create);

router.route('/:id')
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;