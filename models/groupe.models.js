
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Groupe = sequelize.define('groupe', {
    name: Sequelize.STRING,
});


module.exports = Groupe;