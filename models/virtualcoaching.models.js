/* {
    "id": 1101,
    "memberId": 1,
    "goal": "Muscle Gain",
    "currentFitnessLevel": "Intermediate",
    "aiGeneratedWorkoutPlan": {
      "week1": [
        {
          "day": "Monday",
          "exercise": "Bench Press",
          "sets": 4,
          "reps": 8,
          "restTime": "90 seconds"
        },
        {
          "day": "Monday",
          "exercise": "Deadlift",
          "sets": 3,
          "reps": 6,
          "restTime": "120 seconds"
        }
      ],
      "week2": [
        {
          "day": "Monday",
          "exercise": "Incline Dumbbell Press",
          "sets": 3,
          "reps": 10,
          "restTime": "90 seconds"
        }
      ]
    },
    "aiFeedback": [
      "Increase weight by 5% next session.",
      "Improve hydration for better performance."
    ],
    "trainerReview": {
      "trainerId": 101,
      "comments": "Great progress, increase protein intake for better recovery."
    }
  } */
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = require("../db/init.sequelize.js");
    
    const VirtualCoaching = sequelize.define('VirtualCoaching', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      goal: {
        type: DataTypes.STRING,
        allowNull: false
      },
      currentFitnessLevel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      aiGeneratedWorkoutPlan: {
        type: DataTypes.JSON,
        allowNull: false
      },
      aiFeedback: {
        type: DataTypes.JSON,
        allowNull: false
      },
      trainerReview: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'virtual_coaching',
      timestamps: true
    });
    
    module.exports = VirtualCoaching;

 // Array of 20 rows to insert
const virtualCoachingData = [
  {
    memberId: 1,
    goal: "Weight loss",
    currentFitnessLevel: "Beginner",
    aiGeneratedWorkoutPlan: { exercises: ["Jogging", "Push-ups", "Squats"], duration: "30 minutes" },
    aiFeedback: { feedback: "Keep up the good work, focus on consistency!" },
    trainerReview: { review: "Great start! Keep pushing yourself." }
  },
  {
    memberId: 2,
    goal: "Muscle gain",
    currentFitnessLevel: "Intermediate",
    aiGeneratedWorkoutPlan: { exercises: ["Deadlifts", "Bench press", "Pull-ups"], duration: "45 minutes" },
    aiFeedback: { feedback: "Increase weights slowly to avoid injury." },
    trainerReview: { review: "You're doing great! Push harder on your lifts." }
  },
  {
    memberId: 3,
    goal: "Improve endurance",
    currentFitnessLevel: "Advanced",
    aiGeneratedWorkoutPlan: { exercises: ["HIIT", "Burpees", "Sprints"], duration: "30 minutes" },
    aiFeedback: { feedback: "You’re hitting your targets, increase intensity." },
    trainerReview: { review: "Amazing progress. You’re almost there!" }
  },
  {
    memberId: 4,
    goal: "Flexibility",
    currentFitnessLevel: "Beginner",
    aiGeneratedWorkoutPlan: { exercises: ["Yoga", "Stretching", "Pilates"], duration: "30 minutes" },
    aiFeedback: { feedback: "Focus on holding stretches for longer." },
    trainerReview: { review: "Great effort, focus on improving flexibility." }
  },
  {
    memberId: 5,
    goal: "Cardio",
    currentFitnessLevel: "Intermediate",
    aiGeneratedWorkoutPlan: { exercises: ["Running", "Cycling", "Jump rope"], duration: "40 minutes" },
    aiFeedback: { feedback: "You're improving your cardio, keep it up!" },
    trainerReview: { review: "Good job! Work on improving your endurance." }
  },
  {
    memberId: 6,
    goal: "Strength",
    currentFitnessLevel: "Advanced",
    aiGeneratedWorkoutPlan: { exercises: ["Squats", "Overhead press", "Lunges"], duration: "50 minutes" },
    aiFeedback: { feedback: "Good work, increase load progressively." },
    trainerReview: { review: "Impressive strength gains, well done!" }
  },
  {
    memberId: 7,
    goal: "Weight loss",
    currentFitnessLevel: "Beginner",
    aiGeneratedWorkoutPlan: { exercises: ["Walking", "Step-ups", "Bodyweight squats"], duration: "30 minutes" },
    aiFeedback: { feedback: "Stay consistent, results will follow." },
    trainerReview: { review: "Keep pushing! You're on the right track." }
  },
  {
    memberId: 8,
    goal: "Muscle gain",
    currentFitnessLevel: "Intermediate",
    aiGeneratedWorkoutPlan: { exercises: ["Barbell rows", "Leg press", "Dumbbell curls"], duration: "40 minutes" },
    aiFeedback: { feedback: "Focus on form, not just weights." },
    trainerReview: { review: "You're progressing well. Stay disciplined." }
  },
  {
    memberId: 9,
    goal: "Improve endurance",
    currentFitnessLevel: "Intermediate",
    aiGeneratedWorkoutPlan: { exercises: ["Running", "Swimming", "Cycling"], duration: "45 minutes" },
    aiFeedback: { feedback: "Improve pace on longer sessions." },
    trainerReview: { review: "Excellent endurance improvement!" }
  },
  {
    memberId: 10,
    goal: "Flexibility",
    currentFitnessLevel: "Beginner",
    aiGeneratedWorkoutPlan: { exercises: ["Hamstring stretches", "Hip flexor stretches"], duration: "20 minutes" },
    aiFeedback: { feedback: "Incorporate stretching throughout the day." },
    trainerReview: { review: "Great start on flexibility!" }
  },
  {
    memberId: 11,
    goal: "Cardio",
    currentFitnessLevel: "Advanced",
    aiGeneratedWorkoutPlan: { exercises: ["HIIT", "Rowing", "Running intervals"], duration: "45 minutes" },
    aiFeedback: { feedback: "Increase interval duration to improve speed." },
    trainerReview: { review: "Keep it up, you're smashing your goals!" }
  },
  {
    memberId: 12,
    goal: "Strength",
    currentFitnessLevel: "Intermediate",
    aiGeneratedWorkoutPlan: { exercises: ["Deadlifts", "Squats", "Power cleans"], duration: "50 minutes" },
    aiFeedback: { feedback: "Work on your form, especially in deadlifts." },
    trainerReview: { review: "Strong progress, focus on perfecting form." }
  },
  {
    memberId: 13,
    goal: "Weight loss",
    currentFitnessLevel: "Intermediate",
    aiGeneratedWorkoutPlan: { exercises: ["Walking", "Elliptical machine", "Push-ups"], duration: "35 minutes" },
    aiFeedback: { feedback: "Focus on cardio to shed pounds." },
    trainerReview: { review: "You're doing great, focus on consistency." }
  },
  {
    memberId: 14,
    goal: "Muscle gain",
    currentFitnessLevel: "Advanced",
    aiGeneratedWorkoutPlan: { exercises: ["Squats", "Bench press", "Rows"], duration: "50 minutes" },
    aiFeedback: { feedback: "You’re lifting heavier weights, good job!" },
    trainerReview: { review: "Amazing strength development!" }
  },
  {
    memberId: 15,
    goal: "Improve endurance",
    currentFitnessLevel: "Advanced",
    aiGeneratedWorkoutPlan: { exercises: ["Sprints", "Jump rope", "Rowing"], duration: "40 minutes" },
    aiFeedback: { feedback: "Great job, increase your sprint duration." },
    trainerReview: { review: "You're a machine! Keep pushing." }
  },
  {
    memberId: 16,
    goal: "Flexibility",
    currentFitnessLevel: "Intermediate",
    aiGeneratedWorkoutPlan: { exercises: ["Stretching", "Pilates"], duration: "30 minutes" },
    aiFeedback: { feedback: "Hold stretches for longer, improve flexibility." },
    trainerReview: { review: "Good progress, keep focusing on flexibility." }
  },
  {
    memberId: 17,
    goal: "Cardio",
    currentFitnessLevel: "Beginner",
    aiGeneratedWorkoutPlan: { exercises: ["Walking", "Cycling", "Jumping jacks"], duration: "30 minutes" },
    aiFeedback: { feedback: "Take breaks as needed, but keep going." },
    trainerReview: { review: "Great effort, consistency will bring results." }
  },
  {
    memberId: 18,
    goal: "Strength",
    currentFitnessLevel: "Intermediate",
    aiGeneratedWorkoutPlan: { exercises: ["Lunges", "Squats", "Push-ups"], duration: "40 minutes" },
    aiFeedback: { feedback: "Focus on bodyweight strength training." },
    trainerReview: { review: "Good form, keep challenging yourself." }
  },
  {
    memberId: 19,
    goal: "Weight loss",
    currentFitnessLevel: "Intermediate",
    aiGeneratedWorkoutPlan: { exercises: ["Jogging", "Cycling", "Bodyweight squats"], duration: "40 minutes" },
    aiFeedback: { feedback: "Keep the intensity up, you’re doing well." },
    trainerReview: { review: "Consistency is key, keep it up!" }
  },
  {
    memberId: 20,
    goal: "Muscle gain",
    currentFitnessLevel: "Advanced",
    aiGeneratedWorkoutPlan: { exercises: ["Deadlifts", "Pull-ups", "Rows"], duration: "45 minutes" },
    aiFeedback: { feedback: "Increase weight as you progress." },
    trainerReview: { review: "Solid progress, just keep pushing!" }
  }
];

// Insert 20 rows using bulkCreate
VirtualCoaching.bulkCreate(virtualCoachingData)
  .then(() => {
    console.log("Successfully inserted 20 rows into VirtualCoaching table.");
  })
  .catch((error) => {
    console.error("Error inserting rows:", error);
  });   