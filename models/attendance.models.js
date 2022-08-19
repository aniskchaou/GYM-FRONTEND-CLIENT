
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Attendance = sequelize.define('attendance', {
    title: Sequelize.STRING,
    date: Sequelize.STRING,
});

module.exports = Attendance;