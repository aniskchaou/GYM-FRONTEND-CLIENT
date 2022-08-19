var sequelize = require("../../db/init.sequelize.js");
var Sequelize = require('sequelize');
var HeaderSettings = sequelize.define('header_settings', {
    enbaleSearchBar: Sequelize.STRING,
    showLogo: Sequelize.STRING
});


module.exports = HeaderSettings;