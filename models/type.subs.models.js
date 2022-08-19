var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var TypeSub = sequelize.define('type_subs', {
      member: Sequelize.STRING,
        category: Sequelize.STRING,
        period: Sequelize.STRING,
        limit: Sequelize.STRING,
        amount: Sequelize.STRING,
        description: Sequelize.STRING,
        fee: Sequelize.STRING,
        time_payment: Sequelize.STRING
});


module.exports = TypeSub;