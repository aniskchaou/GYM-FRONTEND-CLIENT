
var sequelize = require("../../db/init.sequelize.js");
var Sequelize = require('sequelize');
var FooterSettings = sequelize.define('footer_settings', {
    enableFooter: Sequelize.STRING,
    enableCopyRightTest:Sequelize.STRING
});


module.exports = FooterSettings;