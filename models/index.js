

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

 const dotenv = require('dotenv');
dotenv.config();

//  console.log("env file datat   -----%%%",process.env)
//const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }



  let  HOST = process.env.DB_HOST;
  let  USER = process.env.DB_USER;
  let  PASSWORD = process.env.DB_PASS;
  let   DIALECT = "postgres";
  let  timezone = process.env.TIMEZONE;
  let DB = process.env.LIVE_DB;
  let logging = false;


   sequelize = new Sequelize(DB, USER, PASSWORD, {
            host: HOST,
            dialect: DIALECT,
            operatorsAliases: 0,
      dialectOptions: {
        useUTC: false, 
        dateStrings: true,
        typeCast: true
      },
     timezone: '+05:30',
            logging: false,
            pool: {
                max: 10,
                min: 0,
                idle: 10000,
        acquire: 120000
            },
            retry: {
                max: 5
            } 
        });
    

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {

  console.log("associate model",db[modelName])
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync();
module.exports = db;


