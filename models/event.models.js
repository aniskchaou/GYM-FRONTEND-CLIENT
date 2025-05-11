
var sequelize = require("../db/init.sequelize.js");
// var Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

/* var Event = sequelize.define('event', {
    event_name: Sequelize.STRING,
    event_date: Sequelize.STRING,
    place_id: Sequelize.STRING,
    starttime: Sequelize.STRING,
    endtime: Sequelize.STRING
});
{
    "id": 4,
    "campaignId": 11001,
    "title": "Summer Bootcamp Discount",
    "type": "Email & Social Media",
    "targetAudience": {
      "ageGroup": "18-40",
      "interest": ["Weight Loss", "Cardio Training"]
    },
    "startDate": "2024-06-01",
    "endDate": "2024-07-01",
    "discount": "15% off",
    "performanceMetrics": {
      "emailOpenRate": "38%",
      "conversionRate": "8%",
      "socialMediaEngagement": "5000 likes, 1200 shares"
    }
  }
  const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js"); */

const Event = sequelize.define('Event', {
  campaignId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  targetAudience: {
    type: DataTypes.JSON,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  discount: {
    type: DataTypes.STRING,
    allowNull: false
  },
  performanceMetrics: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  tableName: 'events',
  timestamps: true
});

module.exports = Event;

const events = [
  {
    title: "Spring Sale Campaign",
    type: "Marketing",
    targetAudience: JSON.stringify(["Existing Customers", "New Users"]),
    startDate: "2025-04-01",
    endDate: "2025-04-30",
    discount: "20%",
    performanceMetrics: JSON.stringify({
      clicks: 5000,
      conversions: 120,
      revenue: 15000
    })
  },
  {
    title: "Black Friday Mega Sale",
    type: "Marketing",
    targetAudience: JSON.stringify(["All Customers"]),
    startDate: "2025-11-25",
    endDate: "2025-11-28",
    discount: "50%",
    performanceMetrics: JSON.stringify({
      clicks: 10000,
      conversions: 250,
      revenue: 50000
    })
  },
  {
    title: "New Year Resolution Fitness Campaign",
    type: "Health & Fitness",
    targetAudience: JSON.stringify(["Gym Members", "Potential Members"]),
    startDate: "2025-01-01",
    endDate: "2025-01-15",
    discount: "15%",
    performanceMetrics: JSON.stringify({
      signUps: 300,
      activeParticipants: 150,
      revenue: 5000
    })
  },
  {
    title: "Summer Fitness Challenge",
    type: "Health & Fitness",
    targetAudience: JSON.stringify(["Active Users", "Trainers"]),
    startDate: "2025-06-01",
    endDate: "2025-06-30",
    discount: "10%",
    performanceMetrics: JSON.stringify({
      signUps: 200,
      challengesCompleted: 180,
      revenue: 7000
    })
  }
];

async function insertEvents() {
  try {
    const timestamp = new Date().toISOString();

    // Add timestamps for createdAt and updatedAt for each event record
    const eventRecords = events.map(event => ({
      ...event,
      createdAt: timestamp,
      updatedAt: timestamp
    }));

    await Event.bulkCreate(eventRecords);
    console.log("✅ Events added successfully!");
  } catch (error) {
    console.error("❌ Error inserting events:", error);
  }
}

insertEvents();