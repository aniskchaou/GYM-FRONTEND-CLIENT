var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Currency = sequelize.define('currency', {
    name: Sequelize.STRING,
    symbol: Sequelize.STRING,
    description:Sequelize.STRING
});


module.exports = Currency;