const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

const OnDemandTraining = sequelize.define(
  "OnDemandTraining",
  {
    trainingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false, // Example: "Cardio", "Strength", "Yoga"
    },
    difficultyLevel: {
      type: DataTypes.STRING,
      allowNull: false, // Example: "Beginner", "Intermediate", "Advanced"
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false, // Example: "30 mins", "1 hour"
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: false, // URL to the on-demand training video
    },
    trainerId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Can be null if it's a general session
      // references: { model: "Trainer", key: "trainerId" }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true, // If it's a paid session
      defaultValue: 0.0,
    },
    accessType: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Free", // Options: "Free", "Paid", "Subscription"
    },
    equipmentRequired: {
      type: DataTypes.JSON,
      allowNull: true, // Example: ["Dumbbells", "Yoga Mat"]
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Active", // Options: "Active", "Inactive"
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
    tableName: "on_demand_trainings",
    timestamps: true,
  }
);

module.exports = OnDemandTraining;


const trainingSessions = [
  {
    title: "Full Body HIIT Workout",
    description: "A 30-minute high-intensity interval training session to burn fat and build endurance.",
    category: "Cardio",
    difficultyLevel: "Intermediate",
    duration: "30 mins",
    videoUrl: "https://example.com/hiit-workout",
    trainerId: 1,
    price: 0.0,
    accessType: "Free",
    equipmentRequired: ["Yoga Mat"],
    status: "Active",
  },
  {
    title: "Strength Training for Beginners",
    description: "A guided strength training session focusing on core and upper body strength.",
    category: "Strength",
    difficultyLevel: "Beginner",
    duration: "45 mins",
    videoUrl: "https://example.com/strength-training",
    trainerId: 2,
    price: 9.99,
    accessType: "Paid",
    equipmentRequired: ["Dumbbells", "Resistance Bands"],
    status: "Active",
  },
  {
    title: "Yoga for Stress Relief",
    description: "A relaxing yoga session designed to reduce stress and improve flexibility.",
    category: "Yoga",
    difficultyLevel: "All Levels",
    duration: "1 hour",
    videoUrl: "https://example.com/yoga-stress-relief",
    trainerId: 3,
    price: 0.0,
    accessType: "Subscription",
    equipmentRequired: ["Yoga Mat"],
    status: "Active",
  },
];

OnDemandTraining.bulkCreate(trainingSessions)
  .then(() => console.log("On-Demand Training Sessions inserted!"))
  .catch((error) => console.error("Error inserting training sessions:", error));
