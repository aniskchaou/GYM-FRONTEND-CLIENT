
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var History = sequelize.define('history', {
    category: Sequelize.STRING,
    title: Sequelize.STRING,
    member:Sequelize.STRING,
    type:Sequelize.STRING
});


module.exports = History;