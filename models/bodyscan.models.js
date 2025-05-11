const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust path based on your project structure

const ProgressBodyScan = sequelize.define(
  "ProgressBodyScan",
  {
    scanId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: { model: "Users", key: "userId" }
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true, // User's weight in kilograms
    },
    bodyFatPercentage: {
      type: DataTypes.FLOAT,
      allowNull: true, // Body fat percentage
    },
    muscleMass: {
      type: DataTypes.FLOAT,
      allowNull: true, // Muscle mass in kilograms
    },
    bmi: {
      type: DataTypes.FLOAT,
      allowNull: true, // Body Mass Index
    },
    waistCircumference: {
      type: DataTypes.FLOAT,
      allowNull: true, // Waist size in cm
    },
    hipCircumference: {
      type: DataTypes.FLOAT,
      allowNull: true, // Hip size in cm
    },
    bodyCompositionImageUrl: {
      type: DataTypes.STRING,
      allowNull: true, // URL for the image taken during the body scan
    },
    scanDate: {
      type: DataTypes.DATEONLY,
      allowNull: false, // Date of the scan
    },
    trainerComments: {
      type: DataTypes.TEXT,
      allowNull: true, // Trainer's comments for the user
    },
    progressStatus: {
      type: DataTypes.STRING,
      allowNull: true, // "Improved", "Maintained", "Declined"
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
    tableName: "progress_body_scans",
    timestamps: true,
  }
);

module.exports = ProgressBodyScan;

//const ProgressBodyScan = require("../models/ProgressBodyScan");

const progressScans = [
  {
    userId: 1,
    weight: 70.0,
    bodyFatPercentage: 15.0,
    muscleMass: 30.0,
    bmi: 22.5,
    waistCircumference: 75.0,
    hipCircumference: 95.0,
    bodyCompositionImageUrl: "https://example.com/scan1.jpg",
    scanDate: "2025-03-01",
    trainerComments: "Great improvement! Keep up the hard work.",
    progressStatus: "Improved",
  },
  {
    userId: 2,
    weight: 80.5,
    bodyFatPercentage: 18.5,
    muscleMass: 32.5,
    bmi: 25.2,
    waistCircumference: 80.0,
    hipCircumference: 98.0,
    bodyCompositionImageUrl: "https://example.com/scan2.jpg",
    scanDate: "2025-03-05",
    trainerComments: "Slight increase in muscle mass, need to reduce fat.",
    progressStatus: "Maintained",
  },
  {
    userId: 3,
    weight: 65.0,
    bodyFatPercentage: 20.0,
    muscleMass: 28.0,
    bmi: 21.2,
    waistCircumference: 70.0,
    hipCircumference: 93.0,
    bodyCompositionImageUrl: "https://example.com/scan3.jpg",
    scanDate: "2025-03-07",
    trainerComments: "Stable progress, no major changes observed.",
    progressStatus: "Maintained",
  },
];

ProgressBodyScan.bulkCreate(progressScans)
  .then(() => console.log("Progress body scans inserted successfully!"))
  .catch((error) => console.error("Error inserting progress body scans:", error));
