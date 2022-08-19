

var sequelize = require("../../db/init.sequelize.js");
var Sequelize = require('sequelize');

var DashboardSettings = sequelize.define('dashboard_settings', {
    showSummary: Sequelize.STRING,
    showCalendar: Sequelize.STRING,
    showExpenseIncomeCharts: Sequelize.STRING
});


module.exports = DashboardSettings;