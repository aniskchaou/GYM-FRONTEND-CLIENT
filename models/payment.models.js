
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Payment = sequelize.define('payment', {
    member: Sequelize.STRING,
    date: Sequelize.STRING,
    amount:Sequelize.STRING
});


module.exports = Payment;