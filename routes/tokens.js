const router = require('express').Router();

const tokenController = require('../controllers/tokens');

router.route('/')
    .get(tokenController.list)
    .post(tokenController.create);


router.route('/:id')
    .get(tokenController.read)
    .put(tokenController.update)
    .delete(tokenController.delete);

module.exports = router;