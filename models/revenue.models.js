
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Revenue = sequelize.define('revenue', {
    name: Sequelize.STRING,
    amount: Sequelize.STRING,
    date:Sequelize.STRING
});
module.exports = Revenue;