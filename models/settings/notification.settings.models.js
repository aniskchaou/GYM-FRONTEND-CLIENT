var sequelize = require("../../db/init.sequelize.js");
var Sequelize = require('sequelize');

var NotificationSettings = sequelize.define('notification_settings', {
    showNotification: Sequelize.STRING
});


module.exports = NotificationSettings;