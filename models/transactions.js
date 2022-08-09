'use strict';
module.exports = (sequelize, DataTypes,Sequelize) => {
  const Transactions = sequelize.define('Transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    walletId: {
      allowNull: false,
      type: DataTypes.STRING,      
    },
    amount: {
        type:DataTypes.NUMERIC,
    },
    type: {
        type: DataTypes.STRING
    },
    balance: {
      allowNull: false,
      type: DataTypes.NUMERIC,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {});
  Transactions.associate = function(models) {
  };
  return Transactions;
};
