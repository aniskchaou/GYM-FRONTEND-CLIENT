/* {
    "id": 801,
    "dateRange": {
      "start": "2024-01-01",
      "end": "2024-03-01"
    },
    "revenue": {
      "totalIncome": 125000,
      "membershipFees": 90000,
      "personalTraining": 25000,
      "productSales": 10000,
      "yearOverYearGrowth": "12%"
    },
    "customerRetention": {
      "newMembers": 150,
      "renewedMembers": 120,
      "cancellationRate": "5%",
      "aiRetentionInsights": "Increase loyalty programs to reduce cancellations."
    },
    "operationalEfficiency": {
      "classUtilizationRate": "78%",
      "trainerUtilization": "85%",
      "peakHours": ["6AM - 9AM", "5PM - 8PM"],
      "aiOptimization": "Consider adding an extra class slot during peak hours."
    }
  } */
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = require("../db/init.sequelize.js");
    
    const BusinessAnalytics = sequelize.define('BusinessAnalytics', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dateRange: {
        type: DataTypes.JSON,
        allowNull: false
      },
      revenue: {
        type: DataTypes.JSON,
        allowNull: false
      },
      customerRetention: {
        type: DataTypes.JSON,
        allowNull: false
      },
      operationalEfficiency: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'business_analytics',
      timestamps: true
    });
    
    module.exports = BusinessAnalytics;

    async function insertAnalyticsData() {
      try {
        // Insert multiple analytics data
        await BusinessAnalytics.bulkCreate([
          {
            dateRange: {
              startDate: '2025-01-01',
              endDate: '2025-01-31'
            },
            revenue: {
              totalRevenue: 50000,
              revenueByProduct: {
                productA: 20000,
                productB: 30000
              }
            },
            customerRetention: {
              newCustomers: 150,
              returningCustomers: 100,
              retentionRate: 0.67
            },
            operationalEfficiency: {
              averageProductionTime: 2.5,
              downtime: 10
            }
          },
          {
            dateRange: {
              startDate: '2025-02-01',
              endDate: '2025-02-28'
            },
            revenue: {
              totalRevenue: 55000,
              revenueByProduct: {
                productA: 25000,
                productB: 30000
              }
            },
            customerRetention: {
              newCustomers: 160,
              returningCustomers: 110,
              retentionRate: 0.69
            },
            operationalEfficiency: {
              averageProductionTime: 2.3,
              downtime: 8
            }
          },
          {
            dateRange: {
              startDate: '2025-03-01',
              endDate: '2025-03-31'
            },
            revenue: {
              totalRevenue: 60000,
              revenueByProduct: {
                productA: 30000,
                productB: 30000
              }
            },
            customerRetention: {
              newCustomers: 170,
              returningCustomers: 120,
              retentionRate: 0.71
            },
            operationalEfficiency: {
              averageProductionTime: 2.2,
              downtime: 5
            }
          },
          {
            dateRange: {
              startDate: '2025-04-01',
              endDate: '2025-04-30'
            },
            revenue: {
              totalRevenue: 65000,
              revenueByProduct: {
                productA: 35000,
                productB: 30000
              }
            },
            customerRetention: {
              newCustomers: 180,
              returningCustomers: 130,
              retentionRate: 0.72
            },
            operationalEfficiency: {
              averageProductionTime: 2.0,
              downtime: 3
            }
          },
          {
            dateRange: {
              startDate: '2025-05-01',
              endDate: '2025-05-31'
            },
            revenue: {
              totalRevenue: 70000,
              revenueByProduct: {
                productA: 40000,
                productB: 30000
              }
            },
            customerRetention: {
              newCustomers: 190,
              returningCustomers: 140,
              retentionRate: 0.74
            },
            operationalEfficiency: {
              averageProductionTime: 1.8,
              downtime: 2
            }
          }
        ]);
    
        console.log('5 rows of business analytics data inserted successfully!');
      } catch (error) {
        console.error('Error inserting data:', error);
      }
    }
    
    insertAnalyticsData();