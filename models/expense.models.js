
/* var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Expense = sequelize.define('expense', {
    name: Sequelize.STRING,
    amount: Sequelize.STRING,
    date:Sequelize.STRING
});
{
    "expenseId": 9001,
    "date": "2024-03-02",
    "category": "Equipment Purchase",
    "amount": 1500.00,
    "currency": "USD",
    "paymentMethod": "Bank Transfer",
    "payee": "Fitness Gear Suppliers Inc.",
    "invoiceId": "INV-56789",
    "description": "Purchase of 5 new treadmills",
    "taxAmount": 120.00,
    "totalExpense": 1620.00,
    "status": "Paid",
    "receiptUrl": "https://example.com/invoice/INV-56789.pdf",
    "createdAt": "2024-03-02T10:00:00",
    "updatedAt": "2024-03-02T10:30:00"
  }
  

module.exports = Expense; */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

const Expense = sequelize.define('Expense', {
  expenseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  category: {
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
  payee: {
    type: DataTypes.STRING,
    allowNull: false
  },
  invoiceId: {
    type: DataTypes.STRING,
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
  totalExpense: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  receiptUrl: {
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
  tableName: 'expenses',
  timestamps: true
});

module.exports = Expense;

const expenses = [
  {
    date: "2025-03-01",
    category: "Gym Equipment",
    amount: 1500.00,
    currency: "USD",
    paymentMethod: "Credit Card",
    payee: "Fitness Supplier Inc.",
    invoiceId: "INV123456",
    description: "Purchased new gym equipment for the center, including dumbbells and benches.",
    taxAmount: 150.00,
    totalExpense: 1650.00,
    status: "Paid",
    receiptUrl: "https://example.com/receipts/inv123456",
    createdAt: "2025-03-01",
    updatedAt: "2025-03-01"
  },
  {
    date: "2025-03-02",
    category: "Marketing",
    amount: 500.00,
    currency: "USD",
    paymentMethod: "Bank Transfer",
    payee: "Social Media Agency",
    invoiceId: "INV123457",
    description: "Paid for social media marketing campaign targeting new gym members.",
    taxAmount: 50.00,
    totalExpense: 550.00,
    status: "Paid",
    receiptUrl: "https://example.com/receipts/inv123457",
    createdAt: "2025-03-02",
    updatedAt: "2025-03-02"
  },
  {
    date: "2025-03-03",
    category: "Utilities",
    amount: 200.00,
    currency: "USD",
    paymentMethod: "Debit Card",
    payee: "Electric Company",
    invoiceId: "INV123458",
    description: "Electricity bill for the gym for the month of February.",
    taxAmount: 20.00,
    totalExpense: 220.00,
    status: "Paid",
    receiptUrl: "https://example.com/receipts/inv123458",
    createdAt: "2025-03-03",
    updatedAt: "2025-03-03"
  },
  {
    date: "2025-03-04",
    category: "Staff Salaries",
    amount: 3000.00,
    currency: "USD",
    paymentMethod: "Bank Transfer",
    payee: "John Doe",
    invoiceId: "INV123459",
    description: "Salary payment for gym staff for the month of March.",
    taxAmount: 300.00,
    totalExpense: 3300.00,
    status: "Paid",
    receiptUrl: "https://example.com/receipts/inv123459",
    createdAt: "2025-03-04",
    updatedAt: "2025-03-04"
  },
  {
    date: "2025-03-05",
    category: "Cleaning Services",
    amount: 250.00,
    currency: "USD",
    paymentMethod: "Cash",
    payee: "CleanCo",
    invoiceId: "INV123460",
    description: "Paid for monthly gym cleaning services.",
    taxAmount: 25.00,
    totalExpense: 275.00,
    status: "Paid",
    receiptUrl: "https://example.com/receipts/inv123460",
    createdAt: "2025-03-05",
    updatedAt: "2025-03-05"
  }
];

async function insertExpenses() {
  try {
    const timestamp = new Date().toISOString();

    const expenseRecords = expenses.map(expense => ({
      ...expense,
      createdAt: timestamp,
      updatedAt: timestamp
    }));

    await Expense.bulkCreate(expenseRecords);
    console.log("✅ Expenses added successfully!");
  } catch (error) {
    console.error("❌ Error inserting expenses:", error);
  }
}

insertExpenses()