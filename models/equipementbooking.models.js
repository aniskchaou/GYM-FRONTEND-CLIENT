const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust path based on project structure

const EquipmentBooking = sequelize.define(
  "EquipmentBooking",
  {
    bookingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    equipmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: { model: "Equipment", key: "equipmentId" }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: { model: "Users", key: "userId" }
    },
    bookingStartTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bookingEndTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pending", // Options: "Pending", "Confirmed", "Cancelled", "Completed"
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true, // Optional comments or special requests
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
    tableName: "equipment_bookings",
    timestamps: true,
  }
);

module.exports = EquipmentBooking;

(async () => {
  try {
    await EquipmentBooking.bulkCreate([
      {
        equipmentId: 1,
        userId: 1,
        bookingStartTime: new Date('2025-05-11T08:00:00'),
        bookingEndTime: new Date('2025-05-11T09:00:00'),
        status: 'Confirmed',
        notes: 'Wants treadmill near window',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipmentId: 2,
        userId: 2,
        bookingStartTime: new Date('2025-05-12T10:00:00'),
        bookingEndTime: new Date('2025-05-12T11:00:00'),
        status: 'Completed',
        notes: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipmentId: 3,
        userId: 3,
        bookingStartTime: new Date('2025-05-13T17:00:00'),
        bookingEndTime: new Date('2025-05-13T18:00:00'),
        status: 'Cancelled',
        notes: 'Double booked, canceled by user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipmentId: 4,
        userId: 4,
        bookingStartTime: new Date('2025-05-14T07:00:00'),
        bookingEndTime: new Date('2025-05-14T08:00:00'),
        status: 'Pending',
        notes: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipmentId: 5,
        userId: 5,
        bookingStartTime: new Date('2025-05-15T12:00:00'),
        bookingEndTime: new Date('2025-05-15T13:00:00'),
        status: 'Confirmed',
        notes: 'Needs assistance with weights',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipmentId: 6,
        userId: 6,
        bookingStartTime: new Date('2025-05-16T14:00:00'),
        bookingEndTime: new Date('2025-05-16T15:00:00'),
        status: 'Completed',
        notes: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipmentId: 2,
        userId: 7,
        bookingStartTime: new Date('2025-05-17T16:00:00'),
        bookingEndTime: new Date('2025-05-17T17:00:00'),
        status: 'Confirmed',
        notes: 'Stretching area needed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipmentId: 3,
        userId: 8,
        bookingStartTime: new Date('2025-05-18T18:00:00'),
        bookingEndTime: new Date('2025-05-18T19:00:00'),
        status: 'Pending',
        notes: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipmentId: 4,
        userId: 9,
        bookingStartTime: new Date('2025-05-19T09:00:00'),
        bookingEndTime: new Date('2025-05-19T10:00:00'),
        status: 'Cancelled',
        notes: 'User unavailable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipmentId: 1,
        userId: 10,
        bookingStartTime: new Date('2025-05-20T11:00:00'),
        bookingEndTime: new Date('2025-05-20T12:00:00'),
        status: 'Confirmed',
        notes: 'Requires clean equipment',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    console.log('Equipment bookings inserted successfully.');
  } catch (error) {
    console.error('Error inserting equipment bookings:', error);
  }
})();