'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize').Sequelize;
const process = require('process');
const basename = path.basename(__filename);
const config = require('../config/config');
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.User = require('./user')(sequelize, Sequelize.DataTypes)
db.Contact = require('./contact')(sequelize, Sequelize.DataTypes);
db.ContactInfo = require('./contactinfo')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
