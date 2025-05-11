/* {
    "id": 601,
    "memberId": 1,
    "date": "2024-03-01",
    "metrics": {
      "steps": 10500,
      "caloriesBurned": 550,
      "heartRateAvg": 75,
      "hydrationLevel": "Good",
      "sleepHours": 7
    },
    "aiAnalysis": {
      "injuryRisk": "Low",
      "fatigueLevel": "Moderate",
      "recommendedRestDays": 1,
      "suggestedWorkouts": [
        {
          "type": "Strength Training",
          "focus": "Upper Body",
          "intensity": "Medium"
        },
        {
          "type": "Cardio",
          "focus": "Treadmill Intervals",
          "duration": "30 minutes"
        }
      ]
    }
  } */
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = require("../db/init.sequelize.js");
    
    const Performance = sequelize.define('Performance', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      metrics: {
        type: DataTypes.JSON,
        allowNull: false
      },
      aiAnalysis: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'performances',
      timestamps: true
    });
    
    module.exports = Performance;

    const Performance = require("../models/Performance"); // Adjust path if needed

const performances = [
  {
    memberId: 1,
    date: "2025-03-01",
    metrics: { speed: "12 km/h", endurance: "45 min", strength: { benchPress: "80 kg", squat: "120 kg" } },
    aiAnalysis: { progress: "Steady", suggestions: ["Increase squat reps", "Improve endurance training"] }
  },
  {
    memberId: 2,
    date: "2025-03-02",
    metrics: { speed: "10 km/h", endurance: "30 min", strength: { deadlift: "100 kg", pullUps: "10 reps" } },
    aiAnalysis: { progress: "Needs improvement", suggestions: ["Increase cardio duration", "Strengthen core"] }
  },
  {
    memberId: 3,
    date: "2025-03-03",
    metrics: { speed: "14 km/h", endurance: "60 min", strength: { benchPress: "90 kg", squat: "130 kg" } },
    aiAnalysis: { progress: "Excellent", suggestions: ["Maintain current program", "Focus on mobility"] }
  },
  {
    memberId: 4,
    date: "2025-03-04",
    metrics: { speed: "9 km/h", endurance: "40 min", strength: { deadlift: "110 kg", lunges: "20 reps" } },
    aiAnalysis: { progress: "Average", suggestions: ["Increase lunges resistance", "Improve breathing technique"] }
  },
  {
    memberId: 5,
    date: "2025-03-05",
    metrics: { speed: "13 km/h", endurance: "50 min", strength: { squat: "125 kg", plank: "2 min" } },
    aiAnalysis: { progress: "Good", suggestions: ["Improve plank duration", "Increase running speed"] }
  },
  {
    memberId: 6,
    date: "2025-03-06",
    metrics: { speed: "15 km/h", endurance: "70 min", strength: { pullUps: "15 reps", benchPress: "100 kg" } },
    aiAnalysis: { progress: "Outstanding", suggestions: ["Focus on flexibility", "Reduce strain on joints"] }
  },
  {
    memberId: 7,
    date: "2025-03-07",
    metrics: { speed: "11 km/h", endurance: "35 min", strength: { deadlift: "120 kg", sitUps: "50 reps" } },
    aiAnalysis: { progress: "Moderate", suggestions: ["Increase deadlift reps", "Improve core strength"] }
  },
  {
    memberId: 8,
    date: "2025-03-08",
    metrics: { speed: "16 km/h", endurance: "80 min", strength: { squat: "140 kg", pushUps: "40 reps" } },
    aiAnalysis: { progress: "Exceptional", suggestions: ["Optimize nutrition", "Maintain current pace"] }
  },
  {
    memberId: 9,
    date: "2025-03-09",
    metrics: { speed: "10 km/h", endurance: "45 min", strength: { benchPress: "85 kg", plank: "3 min" } },
    aiAnalysis: { progress: "Good", suggestions: ["Increase plank endurance", "Improve upper body strength"] }
  },
  {
    memberId: 10,
    date: "2025-03-10",
    metrics: { speed: "12 km/h", endurance: "55 min", strength: { deadlift: "115 kg", squats: "110 kg" } },
    aiAnalysis: { progress: "Great", suggestions: ["Increase squat reps", "Enhance post-workout recovery"] }
  }
];

async function insertPerformances() {
  try {
    const timestamp = new Date().toISOString();

    const performanceRecords = performances.map(performance => ({
      ...performance,
      createdAt: timestamp,
      updatedAt: timestamp
    }));

    await Performance.bulkCreate(performanceRecords);
    console.log("✅ 10 performance records added successfully!");
  } catch (error) {
    console.error("❌ Error inserting performance records:", error);
  }
}

insertPerformances();
