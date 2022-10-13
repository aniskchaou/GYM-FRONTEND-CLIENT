
var sequelize = require("../../db/init.sequelize.js");
var Sequelize = require('sequelize');

var EmailTemplate = sequelize.define('eamil_template', {
    title: Sequelize.STRING,
    content: Sequelize.STRING
});


module.exports = EmailTemplate;