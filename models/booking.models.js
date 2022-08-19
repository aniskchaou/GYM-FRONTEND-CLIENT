
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Booking = sequelize.define('booking', {
    name: Sequelize.STRING,
    date: Sequelize.STRING
});


module.exports = Booking;