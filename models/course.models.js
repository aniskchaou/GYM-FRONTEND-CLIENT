var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Course = sequelize.define('course', {
    name: Sequelize.STRING
});


module.exports = Course;
