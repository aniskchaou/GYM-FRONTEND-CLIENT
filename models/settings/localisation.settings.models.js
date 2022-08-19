
var sequelize = require("../../db/init.sequelize.js");
var Sequelize = require('sequelize');

var LeftMenuSettings = sequelize.define('localisation_settings', {
    language: Sequelize.STRING,
    currency: Sequelize.STRING,
    currencySymbol: Sequelize.STRING,
    dateFormat: Sequelize.STRING
});


module.exports = LeftMenuSettings;