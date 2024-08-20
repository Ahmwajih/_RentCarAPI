const router = require('express').Router();

const reservationController = require('../controllers/reservations');

const { isLogin, isAdmin } = require('../middleware/permission');

router.route('/')
    .get(isLogin, isAdmin, reservationController.list)
    .post(reservationController.create);


router.route('/:id')
    .get(isLogin,reservationController.read)
    .put(isLogin, isAdmin,reservationController.update)
    .delete(isLogin, isAdmin,reservationController.delete);


module.exports = router;