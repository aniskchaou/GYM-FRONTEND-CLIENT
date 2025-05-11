
/* var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Excercice = sequelize.define('excercice', {
    date: Sequelize.STRING,
    name: Sequelize.STRING
});
{
    "exerciseId": 5001,
    "name": "Bench Press",
    "category": "Strength Training",
    "muscleGroups": ["Chest", "Triceps", "Shoulders"],
    "difficultyLevel": "Intermediate",
    "equipmentRequired": ["Barbell", "Bench"],
    "instructions": [
      "Lie on the bench with feet flat on the floor.",
      "Grip the bar slightly wider than shoulder-width.",
      "Lower the bar to chest level, then press up to starting position."
    ],
    "recommendedSets": 4,
    "recommendedReps": "8-12",
    "caloriesBurnedPerMinute": 8,
    "videoUrl": "https://example.com/bench-press-guide",
    "createdAt": "2024-01-10",
    "updatedAt": "2024-02-28"
  }
  

module.exports = Excercice; */

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

const Exercise = sequelize.define('Exercise', {
  exerciseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  muscleGroups: {
    type: DataTypes.JSON,
    allowNull: false
  },
  difficultyLevel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  equipmentRequired: {
    type: DataTypes.JSON,
    allowNull: false
  },
  instructions: {
    type: DataTypes.JSON,
    allowNull: false
  },
  recommendedSets: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  recommendedReps: {
    type: DataTypes.STRING,
    allowNull: false
  },
  caloriesBurnedPerMinute: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  videoUrl: {
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
  tableName: 'exercises',
  timestamps: true
});

module.exports = Exercise;


const exercises = [
  {
    name: "Push-Up",
    category: "Strength",
    muscleGroups: JSON.stringify(["Chest", "Triceps", "Shoulders"]),
    difficultyLevel: "Intermediate",
    equipmentRequired: JSON.stringify(["None"]),
    instructions: JSON.stringify(["Start in a plank position with hands slightly wider than shoulder-width apart.", 
                                  "Lower your body until your chest almost touches the ground.", 
                                  "Push yourself back to the starting position."]),
    recommendedSets: 3,
    recommendedReps: "10-15",
    caloriesBurnedPerMinute: 7.0,
    videoUrl: "https://example.com/videos/push-up",
    createdAt: "2025-03-01",
    updatedAt: "2025-03-01"
  },
  {
    name: "Squat",
    category: "Strength",
    muscleGroups: JSON.stringify(["Quadriceps", "Glutes", "Hamstrings"]),
    difficultyLevel: "Intermediate",
    equipmentRequired: JSON.stringify(["None"]),
    instructions: JSON.stringify(["Stand with feet shoulder-width apart.", 
                                  "Lower your body by bending your knees, keeping your back straight.", 
                                  "Return to the standing position."]),
    recommendedSets: 3,
    recommendedReps: "12-15",
    caloriesBurnedPerMinute: 8.5,
    videoUrl: "https://example.com/videos/squat",
    createdAt: "2025-03-02",
    updatedAt: "2025-03-02"
  },
  {
    name: "Deadlift",
    category: "Strength",
    muscleGroups: JSON.stringify(["Back", "Hamstrings", "Glutes"]),
    difficultyLevel: "Advanced",
    equipmentRequired: JSON.stringify(["Barbell"]),
    instructions: JSON.stringify(["Stand with feet hip-width apart and barbell in front of you.", 
                                  "Bend at the hips and knees, grip the barbell, and lift with your back straight.", 
                                  "Lower the barbell back to the ground, keeping a neutral spine."]),
    recommendedSets: 4,
    recommendedReps: "6-8",
    caloriesBurnedPerMinute: 9.0,
    videoUrl: "https://example.com/videos/deadlift",
    createdAt: "2025-03-03",
    updatedAt: "2025-03-03"
  },
  {
    name: "Plank",
    category: "Core",
    muscleGroups: JSON.stringify(["Core", "Abs", "Shoulders"]),
    difficultyLevel: "Beginner",
    equipmentRequired: JSON.stringify(["None"]),
    instructions: JSON.stringify(["Start in a forearm plank position with elbows below your shoulders.", 
                                  "Engage your core and keep your body in a straight line from head to toes.", 
                                  "Hold this position for the recommended time."]),
    recommendedSets: 3,
    recommendedReps: "Hold for 30-60 seconds",
    caloriesBurnedPerMinute: 3.0,
    videoUrl: "https://example.com/videos/plank",
    createdAt: "2025-03-04",
    updatedAt: "2025-03-04"
  },
  {
    name: "Bicep Curl",
    category: "Strength",
    muscleGroups: JSON.stringify(["Biceps"]),
    difficultyLevel: "Beginner",
    equipmentRequired: JSON.stringify(["Dumbbells"]),
    instructions: JSON.stringify(["Stand with a dumbbell in each hand.", 
                                  "With palms facing forward, curl the dumbbells towards your shoulders.", 
                                  "Slowly lower the dumbbells back down."]),
    recommendedSets: 3,
    recommendedReps: "10-12",
    caloriesBurnedPerMinute: 5.0,
    videoUrl: "https://example.com/videos/bicep-curl",
    createdAt: "2025-03-05",
    updatedAt: "2025-03-05"
  }
];

async function insertExercises() {
  try {
    const timestamp = new Date().toISOString();

    // Add timestamps for createdAt and updatedAt for each exercise record
    const exerciseRecords = exercises.map(exercise => ({
      ...exercise,
      createdAt: timestamp,
      updatedAt: timestamp
    }));

    await Exercise.bulkCreate(exerciseRecords);
    console.log("✅ Exercises added successfully!");
  } catch (error) {
    console.error("❌ Error inserting exercises:", error);
  }
}

insertExercises();