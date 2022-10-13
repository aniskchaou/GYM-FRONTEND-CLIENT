
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var User = sequelize.define('user', {
    name: Sequelize.STRING,
    birthday: Sequelize.DATE,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    telephone: Sequelize.STRING,
    address: Sequelize.STRING,
    role: Sequelize.STRING,
    username: Sequelize.STRING
});


module.exports = User;