const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust path based on project structure

const GiftCard = sequelize.define(
  "GiftCard",
  {
    cardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Null if not yet assigned
      // references: { model: "Users", key: "userId" }
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Active", // Options: "Active", "Redeemed", "Expired"
    },
    issuedBy: {
      type: DataTypes.STRING,
      allowNull: false, // Admin, System, or Third-Party
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "gift_cards",
    timestamps: true,
  }
);

module.exports = GiftCard;

(async () => {
  try {
    await GiftCard.bulkCreate([
      {
        code: 'GYMGC1001',
        userId: 1,
        amount: 100.00,
        balance: 50.00,
        expirationDate: '2025-12-31',
        status: 'Active',
        issuedBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'GYMGC1002',
        userId: null,
        amount: 75.00,
        balance: 75.00,
        expirationDate: '2026-01-15',
        status: 'Active',
        issuedBy: 'System',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'GYMGC1003',
        userId: 2,
        amount: 50.00,
        balance: 0.00,
        expirationDate: '2024-12-31',
        status: 'Redeemed',
        issuedBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'GYMGC1004',
        userId: 3,
        amount: 100.00,
        balance: 100.00,
        expirationDate: '2025-10-01',
        status: 'Active',
        issuedBy: 'Third-Party',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'GYMGC1005',
        userId: null,
        amount: 25.00,
        balance: 25.00,
        expirationDate: '2025-07-01',
        status: 'Active',
        issuedBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'GYMGC1006',
        userId: 4,
        amount: 150.00,
        balance: 30.00,
        expirationDate: '2025-11-30',
        status: 'Active',
        issuedBy: 'System',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'GYMGC1007',
        userId: null,
        amount: 80.00,
        balance: 0.00,
        expirationDate: '2024-05-01',
        status: 'Expired',
        issuedBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'GYMGC1008',
        userId: 5,
        amount: 60.00,
        balance: 60.00,
        expirationDate: '2026-03-01',
        status: 'Active',
        issuedBy: 'Third-Party',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'GYMGC1009',
        userId: 6,
        amount: 90.00,
        balance: 45.00,
        expirationDate: '2025-09-01',
        status: 'Active',
        issuedBy: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'GYMGC1010',
        userId: null,
        amount: 30.00,
        balance: 30.00,
        expirationDate: '2025-08-15',
        status: 'Active',
        issuedBy: 'System',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    console.log('Gift cards inserted successfully.');
  } catch (error) {
    console.error('Error inserting gift cards:', error);
  }
})();