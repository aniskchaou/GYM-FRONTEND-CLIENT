
var sequelize = require("../../db/init.sequelize.js");
var Sequelize = require('sequelize');

var SystemSettings = sequelize.define('system_settings', {
    appName: Sequelize.STRING,
    showLogo: Sequelize.STRING,
    email: Sequelize.STRING,
    address : Sequelize.STRING,
    entrepriseName: Sequelize.STRING,
    logo : Sequelize.STRING,
});


module.exports = SystemSettings;