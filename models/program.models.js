const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

const Program = sequelize.define("Program", {
  programId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  difficultyLevel: {
    type: DataTypes.STRING,
    allowNull: true
  },
  trainerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    /* references: {
      model: "Trainer",
      key: "trainerId"
    } */
  },
  maxParticipants: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  currentParticipants: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Upcoming" // Values can be "Upcoming", "Ongoing", "Completed"
  }
});



const programs = [
  {
    name: "Beginner Yoga",
    description: "A gentle introduction to yoga for beginners.",
    category: "Yoga",
    duration: "6 weeks",
    startDate: "2025-04-01",
    endDate: "2025-05-12",
    difficultyLevel: "Beginner",
    trainerId: 1,
    maxParticipants: 20,
    currentParticipants: 5,
    status: "Upcoming"
  },
  {
    name: "Strength Training Bootcamp",
    description: "An intense program focused on building strength and endurance.",
    category: "Strength Training",
    duration: "8 weeks",
    startDate: "2025-03-15",
    endDate: "2025-05-10",
    difficultyLevel: "Intermediate",
    trainerId: 2,
    maxParticipants: 15,
    currentParticipants: 10,
    status: "Ongoing"
  },
  {
    name: "Cardio Blast",
    description: "A high-intensity cardio program to improve endurance.",
    category: "Cardio",
    duration: "4 weeks",
    startDate: "2025-05-01",
    endDate: "2025-06-01",
    difficultyLevel: "Advanced",
    trainerId: 3,
    maxParticipants: 25,
    currentParticipants: 18,
    status: "Upcoming"
  },
  {
    name: "Weight Loss Challenge",
    description: "A structured plan combining workouts and nutrition for weight loss.",
    category: "Weight Loss",
    duration: "12 weeks",
    startDate: "2025-02-01",
    endDate: "2025-04-30",
    difficultyLevel: "Intermediate",
    trainerId: 4,
    maxParticipants: 30,
    currentParticipants: 22,
    status: "Ongoing"
  },
  {
    name: "Senior Wellness Program",
    description: "A low-impact fitness program designed for senior citizens.",
    category: "Wellness",
    duration: "6 weeks",
    startDate: "2025-04-10",
    endDate: "2025-05-22",
    difficultyLevel: "Beginner",
    trainerId: 5,
    maxParticipants: 20,
    currentParticipants: 8,
    status: "Upcoming"
  }
];

sequelize.sync({ force: true }) // or { alter: true } if you don’t want to drop the table
  .then(() => {
    return Program.bulkCreate(programs);
  })
  .then(() => console.log("Programs inserted successfully!"))
  .catch((error) => console.error("Error inserting programs:", error));


  module.exports = Program;