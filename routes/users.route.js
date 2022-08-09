const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/healthCheck', function (request, response, next) {
    userController.healthCheck(request, response, next);
});

module.exports = router;
