var sequelize = require("../db/init.sequelize.js");
/* var Sequelize = require('sequelize');

var Course = sequelize.define('course', {
    name: Sequelize.STRING
}); */

/* {
    "courseId": 4001,
    "name": "12-Week Fat Loss Challenge",
    "description": "A comprehensive program designed for fat loss, strength building, and endurance improvement.",
    "trainerId": 2003,
    "trainerName": "Sarah Mitchell",
    "durationWeeks": 12,
    "difficultyLevel": "All Levels",
    "schedule": [
      {
        "week": 1,
        "focus": "Metabolic Conditioning",
        "activities": ["HIIT", "Circuit Training"]
      },
      {
        "week": 2,
        "focus": "Strength & Endurance",
        "activities": ["Weight Training", "Core Workouts"]
      }
    ],
    "enrolledUsers": [5001, 5002, 5003],
    "price": 199.99,
    "discountAvailable": false,
    "reviews": [
      {
        "userId": 5004,
        "rating": 5,
        "comment": "Fantastic course! Saw great results."
      }
    ],
    "createdAt": "2024-02-01",
    "updatedAt": "2024-03-01"
  } */
    const { Sequelize, DataTypes } = require('sequelize');

    
    const Course = sequelize.define('Course', {
      courseId: {
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
      durationWeeks: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      difficultyLevel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      schedule: {
        type: DataTypes.JSON,
        allowNull: false
      },
      enrolledUsers: {
        type: DataTypes.JSON,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      discountAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      reviews: {
        type: DataTypes.JSON,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'courses',
      timestamps: true
    });
    
module.exports = Course;

async function insertCourses() {
  try {
    await Course.bulkCreate([
      {
        name: 'Beginner Yoga',
        description: 'A beginner-friendly yoga course.',
        trainerId: 1,
        trainerName: 'Alice Johnson',
        durationWeeks: 4,
        difficultyLevel: 'Beginner',
        schedule: {
          Monday: '8AM - 9AM',
          Wednesday: '8AM - 9AM',
          Friday: '8AM - 9AM'
        },
        enrolledUsers: [201, 202],
        price: 100.00,
        discountAvailable: true,
        reviews: [
          { userId: 201, rating: 4, comment: 'Great intro course!' },
          { userId: 202, rating: 5, comment: 'I love this class!' }
        ]
      },
      {
        name: 'Intermediate Pilates',
        description: 'A Pilates course for those with some experience.',
        trainerId: 2,
        trainerName: 'David Smith',
        durationWeeks: 6,
        difficultyLevel: 'Intermediate',
        schedule: {
          Tuesday: '6PM - 7PM',
          Thursday: '6PM - 7PM'
        },
        enrolledUsers: [203, 204],
        price: 120.00,
        discountAvailable: false,
        reviews: [
          { userId: 203, rating: 5, comment: 'Challenging but very rewarding.' },
          { userId: 204, rating: 4, comment: 'Enjoyable, but tough!' }
        ]
      },
      {
        name: 'Advanced Yoga',
        description: 'An advanced yoga course for experienced practitioners.',
        trainerId: 1,
        trainerName: 'Alice Johnson',
        durationWeeks: 6,
        difficultyLevel: 'Advanced',
        schedule: {
          Monday: '7AM - 8AM',
          Wednesday: '7AM - 8AM',
          Friday: '7AM - 8AM'
        },
        enrolledUsers: [205, 206],
        price: 150.00,
        discountAvailable: true,
        reviews: [
          { userId: 205, rating: 5, comment: 'Very advanced and challenging!' },
          { userId: 206, rating: 5, comment: 'Perfect for those ready to level up.' }
        ]
      },
      {
        name: 'HIIT Training',
        description: 'High-intensity interval training for a full-body workout.',
        trainerId: 3,
        trainerName: 'Tom Brown',
        durationWeeks: 8,
        difficultyLevel: 'Advanced',
        schedule: {
          Monday: '6AM - 7AM',
          Wednesday: '6AM - 7AM',
          Friday: '6AM - 7AM'
        },
        enrolledUsers: [207, 208],
        price: 180.00,
        discountAvailable: true,
        reviews: [
          { userId: 207, rating: 5, comment: 'Sweat, burn, repeat!' },
          { userId: 208, rating: 5, comment: 'The best HIIT course ever!' }
        ]
      },
      {
        name: 'Zumba Dance',
        description: 'A fun and energetic Zumba dance course.',
        trainerId: 4,
        trainerName: 'Mia Taylor',
        durationWeeks: 5,
        difficultyLevel: 'Beginner',
        schedule: {
          Tuesday: '7PM - 8PM',
          Thursday: '7PM - 8PM'
        },
        enrolledUsers: [209, 210],
        price: 90.00,
        discountAvailable: false,
        reviews: [
          { userId: 209, rating: 4, comment: 'So much fun and great music!' },
          { userId: 210, rating: 5, comment: 'Perfect class to stay active and have fun!' }
        ]
      }
    ]);

    console.log('5 courses inserted successfully!');
  } catch (error) {
    console.error('Error inserting courses:', error);
  }
}

insertCourses();