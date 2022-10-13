
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Member = sequelize.define('member', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    birth_date: Sequelize.STRING,
    groupe: Sequelize.STRING,
    activity: Sequelize.STRING,
    address: Sequelize.STRING,
    mobile: Sequelize.STRING,
    weight: Sequelize.STRING,
    size: Sequelize.STRING,
    start_date: Sequelize.STRING,
    end_date: Sequelize.STRING,
    type: Sequelize.STRING,
    coach: Sequelize.STRING
});


module.exports = Member;