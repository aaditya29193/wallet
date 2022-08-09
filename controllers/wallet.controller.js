let walletController = {

    setupWallet: async (request, response, next) => {
      try {    
        let createdWallet = await conn.Wallets.create(request.body);
        response.status(200).send(createdWallet);
      } catch (error) {
        return next(error);
      }
    },
    createTransaction: async (request, response, next) => {
        try{
            console.log("Request params", request.query);            
            let walletBalance = await conn.Wallets.findOne({where:{id:request.query.id}, raw:true});
            let newBalance = parseFloat(walletBalance.balance) + parseFloat(request.body.amount);
            let transactionData = {
                walletId: request.query.id,
                amount: request.body.amount,
                type: request.body.type,
                balance : newBalance
            }
            let newTransaction = conn.Transactions.create(transactionData);
            let updated = await conn.Wallets.update({balance: newBalance}, {where:{id : request.query.id}});
            response.status(200).send(updated);
        }
        catch(error) {
            return next(error)
        }
    },
    getTransactions: async (request, response, next) => {
        try{
            let transactions = await conn.Transactions.findAll({where:{walletId:request.query.id}, raw:true});
            response.status(200).send(transactions);
        }
        catch(error) {
            return next(error)
        }
    },
  
  };
  
  module.exports = walletController;
  