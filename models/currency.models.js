var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Currency = sequelize.define('currency', {
    name: Sequelize.STRING,
    symbol: Sequelize.STRING,
    description:Sequelize.STRING
});


module.exports = Currency;

async function insertCurrencies() {
    try {
      await Currency.bulkCreate([
        { name: 'Dollar', symbol: '$', description: 'Used in the United States and many other countries.' },
        { name: 'Euro', symbol: '€', description: 'The currency of the Eurozone.' },
        { name: 'Yen', symbol: '¥', description: 'The currency of Japan.' },
      ]);
      console.log('Currencies inserted successfully!');
    } catch (error) {
      console.error('Error inserting currencies:', error);
    }
  }
  
  insertCurrencies();