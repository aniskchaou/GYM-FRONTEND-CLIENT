
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Excercice = sequelize.define('excercice', {
    date: Sequelize.STRING,
    name: Sequelize.STRING
});


module.exports = Excercice;