/* {
    "id": 1201,
    "memberId": 1,
    "lastWorkout": {
      "type": "Leg Day",
      "date": "2024-03-01",
      "muscleGroups": ["Quads", "Hamstrings"],
      "aiInjuryRisk": "Medium",
      "recommendedRecovery": "Foam rolling & ice therapy."
    },
    "recoveryPlan": [
      {
        "day": "Tuesday",
        "activity": "Mobility Drills",
        "duration": "20 minutes"
      },
      {
        "day": "Wednesday",
        "activity": "Hydrotherapy",
        "duration": "30 minutes"
      }
    ]
  } */
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = require("../db/init.sequelize.js");
    
    const Recovery = sequelize.define('Recovery', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      lastWorkout: {
        type: DataTypes.JSON,
        allowNull: false
      },
      recoveryPlan: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'recovery',
      timestamps: true
    });
    
    module.exports = Recovery;

    const recoveries = [
      {
        memberId: 1,
        lastWorkout: { date: "2025-03-01", type: "Strength Training", duration: "60 min", intensity: "High" },
        recoveryPlan: { restDays: 1, hydration: "3L", stretching: ["Hamstring", "Quadriceps"], supplements: ["Protein", "BCAA"] }
      },
      {
        memberId: 2,
        lastWorkout: { date: "2025-03-02", type: "Cardio", duration: "45 min", intensity: "Medium" },
        recoveryPlan: { restDays: 2, hydration: "2.5L", stretching: ["Calves", "Lower Back"], supplements: ["Electrolytes"] }
      },
      {
        memberId: 3,
        lastWorkout: { date: "2025-03-03", type: "HIIT", duration: "30 min", intensity: "High" },
        recoveryPlan: { restDays: 1, hydration: "3L", stretching: ["Hip Flexors", "Glutes"], supplements: ["Creatine"] }
      },
      {
        memberId: 4,
        lastWorkout: { date: "2025-03-04", type: "Yoga", duration: "60 min", intensity: "Low" },
        recoveryPlan: { restDays: 0, hydration: "2L", stretching: ["Full Body"], supplements: ["None"] }
      },
      {
        memberId: 5,
        lastWorkout: { date: "2025-03-05", type: "Cycling", duration: "90 min", intensity: "Medium" },
        recoveryPlan: { restDays: 2, hydration: "3.5L", stretching: ["Quadriceps", "Hamstrings"], supplements: ["Magnesium"] }
      },
      {
        memberId: 6,
        lastWorkout: { date: "2025-03-06", type: "Swimming", duration: "60 min", intensity: "High" },
        recoveryPlan: { restDays: 1, hydration: "4L", stretching: ["Shoulders", "Back"], supplements: ["Omega-3"] }
      },
      {
        memberId: 7,
        lastWorkout: { date: "2025-03-07", type: "Strength Training", duration: "75 min", intensity: "Medium" },
        recoveryPlan: { restDays: 2, hydration: "3L", stretching: ["Chest", "Triceps"], supplements: ["Protein"] }
      },
      {
        memberId: 8,
        lastWorkout: { date: "2025-03-08", type: "Running", duration: "30 min", intensity: "High" },
        recoveryPlan: { restDays: 1, hydration: "2.5L", stretching: ["Calves", "Hamstrings"], supplements: ["Electrolytes"] }
      },
      {
        memberId: 9,
        lastWorkout: { date: "2025-03-09", type: "Pilates", duration: "60 min", intensity: "Low" },
        recoveryPlan: { restDays: 0, hydration: "2L", stretching: ["Core", "Lower Back"], supplements: ["None"] }
      },
      {
        memberId: 10,
        lastWorkout: { date: "2025-03-10", type: "Rowing", duration: "50 min", intensity: "High" },
        recoveryPlan: { restDays: 2, hydration: "3.5L", stretching: ["Upper Back", "Shoulders"], supplements: ["BCAA"] }
      }
    ];
    
    async function insertRecoveries() {
      try {
        const timestamp = new Date().toISOString();
    
        const recoveriesWithTimestamps = recoveries.map(recovery => ({
          ...recovery,
          createdAt: timestamp,
          updatedAt: timestamp
        }));
    
        await Recovery.bulkCreate(recoveriesWithTimestamps);
        console.log("✅ 10 recovery records added successfully!");
      } catch (error) {
        console.error("❌ Error inserting recovery records:", error);
      }
    }
    
    insertRecoveries();