
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Staff = sequelize.define('staff', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    date: Sequelize.STRING,
    role: Sequelize.STRING,
    mobile: Sequelize.STRING,
    address: Sequelize.STRING,
    email: Sequelize.STRING

});

module.exports = Staff;