const router = require('express').Router();

const carController = require('../controllers/cars');

const { isAdmin, isLogin } = require('../middleware/permission');

const queryHandler = require('../middleware/queryHandler');

router.use(queryHandler);

router.route('/')
    .get(carController.list)
    .post(carController.create);


router.route('/:id')
    .get(isLogin, carController.read)
    .put(isLogin, isAdmin, carController.update)
    .delete(isLogin, isAdmin,carController.delete);

module.exports = router;