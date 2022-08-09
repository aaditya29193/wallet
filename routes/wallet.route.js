const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const walletController = require('../controllers/wallet.controller');
const { route } = require('./users.route');

router.post('/setup', function (request, response, next) {
    walletController.setupWallet(request, response, next);
});

router.post('/transact', function (request, response, next) {
    walletController.createTransaction(request, response, next);
});

router.get('/transactions', function(request, response, next){
    walletController.getTransactions(request, response, next);
})
module.exports = router;
