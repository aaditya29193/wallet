'use strict';
module.exports = (sequelize, DataTypes,Sequelize) => {
  const Wallets = sequelize.define('Wallets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    walletName: {
      allowNull: false,
      type: DataTypes.STRING,      
    },
    balance: {
      allowNull: false,
      type: DataTypes.NUMERIC,
      unique: true
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
  Wallets.associate = function(models) {
  };
  return Wallets;
};
