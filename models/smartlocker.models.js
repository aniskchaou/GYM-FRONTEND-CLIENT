const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

const SmartLocker = sequelize.define(
  "SmartLocker",
  {
    lockerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lockerNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensures each locker number is unique
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false, // Example: "Main Hall", "Changing Room A"
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Available", // Options: "Available", "Occupied", "Reserved", "Out of Service"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Links to a user if reserved
      // references: { model: "Users", key: "userId" }
    },
    reservationStartTime: {
      type: DataTypes.DATE,
      allowNull: true, // If reserved, stores the start time
    },
    reservationEndTime: {
      type: DataTypes.DATE,
      allowNull: true, // If reserved, stores the end time
    },
    accessCode: {
      type: DataTypes.STRING,
      allowNull: true, // Temporary PIN for locker access
    },
    lastMaintenanceDate: {
      type: DataTypes.DATE,
      allowNull: true, // Tracks last maintenance check
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
    tableName: "smart_lockers",
    timestamps: true,
  }
);

module.exports = SmartLocker;


const lockers = [
  {
    lockerNumber: "A101",
    location: "Main Hall",
    status: "Available",
    lastMaintenanceDate: "2024-01-15",
  },
  {
    lockerNumber: "B202",
    location: "Changing Room A",
    status: "Occupied",
    userId: 5,
    reservationStartTime: "2024-03-09T10:00:00",
    reservationEndTime: "2024-03-09T12:00:00",
    accessCode: "XYS123",
    lastMaintenanceDate: "2024-02-20",
  },
  {
    lockerNumber: "C303",
    location: "VIP Area",
    status: "Reserved",
    userId: 2,
    reservationStartTime: "2024-03-09T14:00:00",
    reservationEndTime: "2024-03-09T16:00:00",
    accessCode: "ZAB456",
    lastMaintenanceDate: "2024-02-25",
  },
  {
    lockerNumber: "D404",
    location: "Poolside",
    status: "Out of Service",
    lastMaintenanceDate: "2024-02-10",
  },
];

SmartLocker.bulkCreate(lockers)
  .then(() => console.log("Smart Lockers inserted!"))
  .catch((error) => console.error("Error inserting lockers:", error));
