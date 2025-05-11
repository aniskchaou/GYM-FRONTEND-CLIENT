
/* var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Groupe = sequelize.define('groupe', {
    name: Sequelize.STRING,
});
{
    "groupId": 3001,
    "name": "Advanced Powerlifters",
    "description": "A dedicated group for experienced lifters focusing on strength training and competition prep.",
    "trainerId": 2002,
    "trainerName": "Mike Roberts",
    "memberCount": 25,
    "activityIds": [1005, 1010, 1015],
    "private": true,
    "requirements": [
      "Must be able to squat 100kg+",
      "Minimum 6 months of lifting experience"
    ],
    "communicationChannel": "Discord",
    "createdAt": "2023-12-01",
    "updatedAt": "2024-02-20"
  }
  

module.exports = Groupe; */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

const Group = sequelize.define('Group', {
  groupId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  trainerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  trainerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  memberCount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  activityIds: {
    type: DataTypes.JSON,
    allowNull: false
  },
  private: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  requirements: {
    type: DataTypes.JSON,
    allowNull: false
  },
  communicationChannel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  tableName: 'groups',
  timestamps: true
});

module.exports = Group;

const groups = [
  {
    name: "Yoga Beginners",
    description: "A group for people new to yoga. Focuses on basic poses and breathing exercises.",
    trainerId: 1,
    trainerName: "John Doe",
    memberCount: 15,
    activityIds: [1, 2, 3], // IDs representing yoga-related activities
    private: false,
    requirements: {
      "experience": "None",
      "ageGroup": "All ages",
      "equipment": ["Yoga Mat"]
    },
    communicationChannel: "Slack",
    createdAt: "2025-03-01",
    updatedAt: "2025-03-01"
  },
  {
    name: "Advanced CrossFit",
    description: "For experienced CrossFit athletes who want to push their limits.",
    trainerId: 2,
    trainerName: "Sarah Smith",
    memberCount: 10,
    activityIds: [4, 5, 6], // IDs representing CrossFit-related activities
    private: true,
    requirements: {
      "experience": "Advanced",
      "ageGroup": "18-45",
      "equipment": ["Barbells", "Kettlebells", "Resistance Bands"]
    },
    communicationChannel: "WhatsApp",
    createdAt: "2025-03-02",
    updatedAt: "2025-03-02"
  },
  {
    name: "Weight Loss Bootcamp",
    description: "A group focused on helping members lose weight through high-intensity training.",
    trainerId: 3,
    trainerName: "Michael Green",
    memberCount: 25,
    activityIds: [7, 8, 9], // IDs representing weight loss activities
    private: false,
    requirements: {
      "experience": "Beginner to Intermediate",
      "ageGroup": "18-50",
      "equipment": ["Jump Rope", "Dumbbells", "Bodyweight"]
    },
    communicationChannel: "Telegram",
    createdAt: "2025-03-03",
    updatedAt: "2025-03-03"
  },
  {
    name: "Pilates for Core Strength",
    description: "A group focused on improving core strength through Pilates exercises.",
    trainerId: 4,
    trainerName: "Jessica Brown",
    memberCount: 12,
    activityIds: [10, 11, 12], // IDs representing Pilates-related activities
    private: false,
    requirements: {
      "experience": "Beginner",
      "ageGroup": "All ages",
      "equipment": ["Pilates Ball", "Mat"]
    },
    communicationChannel: "Facebook Group",
    createdAt: "2025-03-04",
    updatedAt: "2025-03-04"
  },
  {
    name: "Cycling Enthusiasts",
    description: "For cycling lovers who enjoy long-distance rides and exploring new routes.",
    trainerId: 5,
    trainerName: "David White",
    memberCount: 8,
    activityIds: [13, 14, 15], // IDs representing cycling-related activities
    private: true,
    requirements: {
      "experience": "Intermediate to Advanced",
      "ageGroup": "25-50",
      "equipment": ["Road Bike", "Helmet"]
    },
    communicationChannel: "Strava",
    createdAt: "2025-03-05",
    updatedAt: "2025-03-05"
  }
];

async function insertGroups() {
  try {
    const timestamp = new Date().toISOString();

    const groupRecords = groups.map(group => ({
      ...group,
      createdAt: timestamp,
      updatedAt: timestamp
    }));

    await Group.bulkCreate(groupRecords);
    console.log("✅ Groups added successfully!");
  } catch (error) {
    console.error("❌ Error inserting groups:", error);
  }
}

insertGroups();