
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Presence = sequelize.define('presence', {
    member: Sequelize.STRING,
    date: Sequelize.STRING
});


module.exports = Presence;