
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Event = sequelize.define('event', {
    event_name: Sequelize.STRING,
    event_date: Sequelize.STRING,
    place_id: Sequelize.STRING,
    starttime: Sequelize.STRING,
    endtime: Sequelize.STRING
});


module.exports = Event;