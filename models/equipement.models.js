/* {
    "id": 701,
    "equipmentName": "Leg Press Machine",
    "category": "Strength",
    "status": "Available",
    "lastMaintenance": "2024-02-20",
    "nextMaintenance": "2024-03-15",
    "usageStats": {
      "totalUses": 1200,
      "avgDailyUses": 40,
      "failureReports": 2
    },
    "rental": {
      "available": true,
      "rentalFeePerHour": 5.99
    }
  } */
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = require("../db/init.sequelize.js");
    
    const Equipment = sequelize.define('Equipment', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      equipmentName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastMaintenance: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      nextMaintenance: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      usageStats: {
        type: DataTypes.JSON,
        allowNull: false
      },
      rental: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'equipment',
      timestamps: true
    });
    
    module.exports = Equipment;

    (async () => {
      try {
        await Equipment.bulkCreate([
          {
            equipmentName: 'Treadmill Pro 5000',
            category: 'Cardio',
            status: 'Available',
            lastMaintenance: '2025-04-01',
            nextMaintenance: '2025-07-01',
            usageStats: { hoursUsed: 320, sessions: 160 },
            rental: { isRented: false, rentedBy: null },
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            equipmentName: 'Elliptical XT90',
            category: 'Cardio',
            status: 'In Use',
            lastMaintenance: '2025-03-15',
            nextMaintenance: '2025-06-15',
            usageStats: { hoursUsed: 280, sessions: 140 },
            rental: { isRented: true, rentedBy: 2 },
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            equipmentName: 'Rowing Machine RX20',
            category: 'Cardio',
            status: 'Under Maintenance',
            lastMaintenance: '2025-05-01',
            nextMaintenance: '2025-08-01',
            usageStats: { hoursUsed: 150, sessions: 75 },
            rental: { isRented: false, rentedBy: null },
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            equipmentName: 'Leg Press Machine',
            category: 'Strength',
            status: 'Available',
            lastMaintenance: '2025-02-28',
            nextMaintenance: '2025-05-28',
            usageStats: { hoursUsed: 100, sessions: 85 },
            rental: { isRented: false, rentedBy: null },
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            equipmentName: 'Bench Press Station',
            category: 'Strength',
            status: 'Available',
            lastMaintenance: '2025-03-20',
            nextMaintenance: '2025-06-20',
            usageStats: { hoursUsed: 200, sessions: 110 },
            rental: { isRented: false, rentedBy: null },
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            equipmentName: 'Spin Bike S300',
            category: 'Cardio',
            status: 'In Use',
            lastMaintenance: '2025-04-10',
            nextMaintenance: '2025-07-10',
            usageStats: { hoursUsed: 190, sessions: 95 },
            rental: { isRented: true, rentedBy: 4 },
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            equipmentName: 'Cable Crossover Machine',
            category: 'Strength',
            status: 'Available',
            lastMaintenance: '2025-01-10',
            nextMaintenance: '2025-04-10',
            usageStats: { hoursUsed: 130, sessions: 70 },
            rental: { isRented: false, rentedBy: null },
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            equipmentName: 'Stair Climber SC100',
            category: 'Cardio',
            status: 'In Use',
            lastMaintenance: '2025-03-01',
            nextMaintenance: '2025-06-01',
            usageStats: { hoursUsed: 260, sessions: 120 },
            rental: { isRented: true, rentedBy: 6 },
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            equipmentName: 'Smith Machine',
            category: 'Strength',
            status: 'Available',
            lastMaintenance: '2025-02-01',
            nextMaintenance: '2025-05-01',
            usageStats: { hoursUsed: 175, sessions: 90 },
            rental: { isRented: false, rentedBy: null },
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            equipmentName: 'Pull-Up Bar Station',
            category: 'Calisthenics',
            status: 'Available',
            lastMaintenance: '2025-01-20',
            nextMaintenance: '2025-04-20',
            usageStats: { hoursUsed: 80, sessions: 60 },
            rental: { isRented: false, rentedBy: null },
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]);
    
        console.log('Equipment records inserted successfully.');
      } catch (error) {
        console.error('Error inserting equipment records:', error);
      }
    })();