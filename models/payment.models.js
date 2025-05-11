
/* var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Payment = sequelize.define('payment', {
    member: Sequelize.STRING,
    date: Sequelize.STRING,
    amount:Sequelize.STRING
});
{
    "id": 401,
    "memberId": 1,
    "paymentMethod": "Credit Card",
    "transactionId": "TXN123456789",
    "amount": 149.99,
    "currency": "USD",
    "status": "Successful",
    "date": "2024-02-01",
    "invoiceUrl": "https://example.com/invoices/TXN123456789.pdf",
    "refundPolicy": "Eligible for refund within 7 days"
  }
  
  {
    "id": 5,
    "paymentId": 3001,
    "memberId": 101,
    "transaction": {
      "amount": 999,
      "currency": "USD",
      "paymentDate": "2024-01-10",
      "paymentMethod": "Credit Card",
      "status": "Completed",
      "receipt": "INV-2024-001"
    },
    "financialOverview": {
      "totalRevenue": 500000,
      "totalExpenses": 150000,
      "netProfit": 350000,
      "profitMargin": "70%"
    }
  }
  
module.exports = Payment; */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  memberId: {
    type: DataTypes.INTEGER,
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
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  invoiceUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  refundPolicy: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'payments',
  timestamps: true
});

module.exports = Payment;


(async () => {
  try {
    await Payment.bulkCreate([
      {
        memberId: 1,
        paymentMethod: 'Credit Card',
        transactionId: 'TXN1001',
        amount: 49.99,
        currency: 'USD',
        status: 'Completed',
        date: '2025-05-01',
        invoiceUrl: 'https://gym.com/invoices/1001',
        refundPolicy: 'No Refund',
      },
      {
        memberId: 2,
        paymentMethod: 'PayPal',
        transactionId: 'TXN1002',
        amount: 29.99,
        currency: 'USD',
        status: 'Completed',
        date: '2025-05-02',
        invoiceUrl: 'https://gym.com/invoices/1002',
        refundPolicy: '7 Days',
      },
      {
        memberId: 3,
        paymentMethod: 'Debit Card',
        transactionId: 'TXN1003',
        amount: 59.99,
        currency: 'USD',
        status: 'Pending',
        date: '2025-05-03',
        invoiceUrl: 'https://gym.com/invoices/1003',
        refundPolicy: 'No Refund',
      },
      {
        memberId: 4,
        paymentMethod: 'Bank Transfer',
        transactionId: 'TXN1004',
        amount: 99.99,
        currency: 'USD',
        status: 'Completed',
        date: '2025-05-04',
        invoiceUrl: 'https://gym.com/invoices/1004',
        refundPolicy: '14 Days',
      },
      {
        memberId: 5,
        paymentMethod: 'Credit Card',
        transactionId: 'TXN1005',
        amount: 19.99,
        currency: 'USD',
        status: 'Failed',
        date: '2025-05-05',
        invoiceUrl: 'https://gym.com/invoices/1005',
        refundPolicy: 'No Refund',
      },
      {
        memberId: 6,
        paymentMethod: 'PayPal',
        transactionId: 'TXN1006',
        amount: 39.99,
        currency: 'USD',
        status: 'Completed',
        date: '2025-05-06',
        invoiceUrl: 'https://gym.com/invoices/1006',
        refundPolicy: '7 Days',
      },
      {
        memberId: 7,
        paymentMethod: 'Credit Card',
        transactionId: 'TXN1007',
        amount: 24.99,
        currency: 'USD',
        status: 'Completed',
        date: '2025-05-07',
        invoiceUrl: 'https://gym.com/invoices/1007',
        refundPolicy: 'No Refund',
      },
      {
        memberId: 8,
        paymentMethod: 'Cash',
        transactionId: 'TXN1008',
        amount: 14.99,
        currency: 'USD',
        status: 'Completed',
        date: '2025-05-08',
        invoiceUrl: 'https://gym.com/invoices/1008',
        refundPolicy: '3 Days',
      },
      {
        memberId: 9,
        paymentMethod: 'Bank Transfer',
        transactionId: 'TXN1009',
        amount: 79.99,
        currency: 'USD',
        status: 'Refunded',
        date: '2025-05-09',
        invoiceUrl: 'https://gym.com/invoices/1009',
        refundPolicy: '30 Days',
      },
      {
        memberId: 10,
        paymentMethod: 'Debit Card',
        transactionId: 'TXN1010',
        amount: 89.99,
        currency: 'USD',
        status: 'Completed',
        date: '2025-05-10',
        invoiceUrl: 'https://gym.com/invoices/1010',
        refundPolicy: '7 Days',
      }
    ]);

    console.log('Payments inserted successfully.');
  } catch (error) {
    console.error('Error inserting payments:', error);
  }
})();
