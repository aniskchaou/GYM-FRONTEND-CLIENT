
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Member = sequelize.define('member', {
    name: Sequelize.STRING,
    date: Sequelize.STRING,
    address:Sequelize.STRING,
    telephone:Sequelize.STRING
});


module.exports = Member;