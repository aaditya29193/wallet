'use strict';
module.exports = (sequelize, DataTypes,Sequelize) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING,      
    },
    userEmail: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    userAddress: {
      allowNull: false,
      type: DataTypes.STRING,
      //unique: true
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
  Users.associate = function(models) {
  };
  return Users;
};
