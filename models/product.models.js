
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Product = sequelize.define('product', {
    name: Sequelize.STRING,
    quantity: Sequelize.STRING,
    price:Sequelize.STRING
});


module.exports = Product;