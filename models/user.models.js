
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var User = sequelize.define('user', {
    name: Sequelize.STRING,
    birthday: Sequelize.DATE
});


module.exports = User;