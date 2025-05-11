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
    
    const Inventory = sequelize.define('Inventory', {
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
      tableName: 'inventory',
      timestamps: true
    });
    
    module.exports = Inventory;


    const inventoryItems = [
      {
        equipmentName: "Treadmill",
        category: "Cardio",
        status: "Available",
        lastMaintenance: "2025-01-15",
        nextMaintenance: "2025-07-15",
        usageStats: {
          totalHours: 1200,
          hoursLastMonth: 120,
          peakUsageTime: "Morning"
        },
        rental: {
          isAvailableForRent: true,
          dailyRate: 25,
          lastRented: "2025-03-01",
          nextAvailable: "2025-03-05"
        }
      },
      {
        equipmentName: "Dumbbells (5kg)",
        category: "Weights",
        status: "Available",
        lastMaintenance: "2025-02-10",
        nextMaintenance: "2025-08-10",
        usageStats: {
          totalHours: 800,
          hoursLastMonth: 80,
          peakUsageTime: "Afternoon"
        },
        rental: {
          isAvailableForRent: false,
          dailyRate: 0,
          lastRented: "N/A",
          nextAvailable: "N/A"
        }
      },
      {
        equipmentName: "Rowing Machine",
        category: "Cardio",
        status: "Under Maintenance",
        lastMaintenance: "2025-02-20",
        nextMaintenance: "2025-08-20",
        usageStats: {
          totalHours: 1500,
          hoursLastMonth: 100,
          peakUsageTime: "Evening"
        },
        rental: {
          isAvailableForRent: true,
          dailyRate: 30,
          lastRented: "2025-03-03",
          nextAvailable: "2025-03-07"
        }
      },
      {
        equipmentName: "Yoga Mat",
        category: "Accessories",
        status: "Available",
        lastMaintenance: "2025-01-01",
        nextMaintenance: "2025-07-01",
        usageStats: {
          totalHours: 500,
          hoursLastMonth: 50,
          peakUsageTime: "Morning"
        },
        rental: {
          isAvailableForRent: true,
          dailyRate: 5,
          lastRented: "2025-02-15",
          nextAvailable: "2025-02-20"
        }
      },
      {
        equipmentName: "Barbell (20kg)",
        category: "Weights",
        status: "Available",
        lastMaintenance: "2025-03-01",
        nextMaintenance: "2025-09-01",
        usageStats: {
          totalHours: 1000,
          hoursLastMonth: 120,
          peakUsageTime: "Afternoon"
        },
        rental: {
          isAvailableForRent: false,
          dailyRate: 0,
          lastRented: "N/A",
          nextAvailable: "N/A"
        }
      }
    ];
    
    async function insertInventoryItems() {
      try {
        const timestamp = new Date().toISOString();
    
        const inventoryRecords = inventoryItems.map(item => ({
          ...item,
          createdAt: timestamp,
          updatedAt: timestamp
        }));
    
        await Inventory.bulkCreate(inventoryRecords);
        console.log("✅ Inventory items added successfully!");
      } catch (error) {
        console.error("❌ Error inserting inventory items:", error);
      }
    }
    
    insertInventoryItems();  