
var sequelize = require("../../db/init.sequelize.js");
var Sequelize = require('sequelize');
var EmailSettings = sequelize.define('email_settings', {
    smtp: Sequelize.STRING,
    emailSentAddress: Sequelize.DATE
});


module.exports = EmailSettings;