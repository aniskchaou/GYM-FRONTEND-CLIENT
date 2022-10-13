
var sequelize = require("../../db/init.sequelize.js");
var Sequelize = require('sequelize');

var HomePage = sequelize.define('home_page', {
  sliderTitle: Sequelize.STRING,
  leftButtonTitle: Sequelize.STRING,
  rightButtonTitle: Sequelize.STRING,
  memberstitle: Sequelize.STRING,
  content: Sequelize.STRING,
  footer: Sequelize.STRING,
  aboutustitle: Sequelize.STRING,
  subTitle: Sequelize.STRING,
  content: Sequelize.STRING,
  contactDescription: Sequelize.STRING,
  trainerstitle: Sequelize.STRING,
  quote1Title: Sequelize.STRING,
  quote1Description: Sequelize.STRING,
  quote2Title: Sequelize.STRING,
  quote2Description: Sequelize.STRING,
  valuetitle: Sequelize.STRING,
  value1Title: Sequelize.STRING,
  description1: Sequelize.STRING,
  value2Title: Sequelize.STRING,
  description2: Sequelize.STRING,
  value3Title: Sequelize.STRING,
  description3: Sequelize.STRING
});


module.exports = HomePage;