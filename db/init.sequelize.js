const dbConfig = require("./connection.sequelize.js");
var Sequelize = require('sequelize');
/*
var sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    native: dbConfig.native,
    dialectOptions: {
        ssl: true
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
*/
var sequelize = new Sequelize('sqlite::memory:');

module.exports = sequelize;


