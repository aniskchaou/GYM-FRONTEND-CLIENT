
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Expense = sequelize.define('expense', {
    name: Sequelize.STRING,
    amount: Sequelize.STRING,
    date:Sequelize.STRING
});


module.exports = Expense;