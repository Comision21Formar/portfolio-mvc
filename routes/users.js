const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

/* /users */
router.get('/',usersController.index);
router.get('/:id',usersController.profile);

module.exports = router;
