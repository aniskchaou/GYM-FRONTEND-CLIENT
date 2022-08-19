
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Activity = sequelize.define('activity', {
    category: Sequelize.STRING,
    title: Sequelize.STRING,
    member:Sequelize.STRING,
    type:Sequelize.STRING
});


module.exports = Activity;