let userController = {

  healthCheck: async (request, response, next) => {
    try {    
      let users = await conn.Users.findAll();
      response.status(200).send(users);
    } catch (error) {
      return next(error);
    }
  },

};

module.exports = userController;
