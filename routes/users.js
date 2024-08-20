const router = require('express').Router();

const userController = require('../controllers/users');
const { isAdmin, isLogin } = require('../middleware/permission');
const auth = require('../middleware/auth');


router.route('/')
    .get(isAdmin, userController.list)
    .post( userController.create);

router.route('/:id')
    .get(isLogin, userController.read)
    .put(isAdmin,userController.update)
    .delete(isAdmin,userController.delete);

module.exports = router;