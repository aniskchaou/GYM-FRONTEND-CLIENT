
/* var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Revenue = sequelize.define('revenue', {
    name: Sequelize.STRING,
    amount: Sequelize.STRING,
    date:Sequelize.STRING
});
{
    "revenueId": 8001,
    "date": "2024-03-04",
    "source": "Membership Subscription",
    "amount": 299.99,
    "currency": "USD",
    "paymentMethod": "Credit Card",
    "transactionId": "TXN123456789",
    "payerId": 5002,
    "payerName": "Alice Smith",
    "subscriptionId": 6003,
    "description": "Premium Monthly Membership",
    "taxAmount": 20.99,
    "netRevenue": 279.00,
    "status": "Completed",
    "createdAt": "2024-03-04T12:15:00",
    "updatedAt": "2024-03-04T12:30:00"
  }
  
module.exports = Revenue; */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

// Define the Revenue model
const Revenue = sequelize.define('Revenue', {
  revenueId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false
  },
  transactionId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  payerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subscriptionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  taxAmount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  netRevenue: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'revenues',
  timestamps: true
});

// Define the Payer model (for association)
const Payer = sequelize.define('Payer', {
  payerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define the Subscription model (for association)
const Subscription = sequelize.define('Subscription', {
  subscriptionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define associations
Revenue.belongsTo(Payer, { foreignKey: 'payerId' });
Payer.hasMany(Revenue, { foreignKey: 'payerId' });

Revenue.belongsTo(Subscription, { foreignKey: 'subscriptionId' });
Subscription.hasMany(Revenue, { foreignKey: 'subscriptionId' });


module.exports = { Revenue, Payer, Subscription };