
var sequelize = require("../db/init.sequelize.js");
//var Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
const Trainer = require("./trainer.models.js");

/* var Activity = sequelize.define('activity', {
    category: Sequelize.STRING,
    title: Sequelize.STRING,
    member:Sequelize.STRING,
    type:Sequelize.STRING
});
{
    "activityId": 1001,
    "name": "Morning HIIT Workout",
    "description": "A high-intensity interval training session designed for fat loss and endurance.",
    "category": "Workout",
    "trainerId": 2001,
    "trainerName": "Emma Johnson",
    "startTime": "2024-03-05T07:00:00",
    "endTime": "2024-03-05T08:00:00",
    "duration": "60 minutes",
    "maxParticipants": 15,
    "currentParticipants": 10,
    "location": "Studio A",
    "status": "Scheduled",
    "difficultyLevel": "Advanced",
    "equipmentRequired": ["Dumbbells", "Resistance Bands"],
    "createdAt": "2024-02-20",
    "updatedAt": "2024-03-01"
  }
  

module.exports = Activity; */


const Activity = sequelize.define('Activity', {
  activityId: {
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
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  },
  maxParticipants: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  currentParticipants: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
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
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  trainerId: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    // references: {
    //   model: 'Trainer', // This references the `Trainer` model
    //   key: 'trainerId' // This references the `trainerId` field in the `Trainer` model
    // }
  }
}, {
  tableName: 'activities', // Optional: define the table name explicitly
  timestamps: true // Optional: if you want Sequelize to handle createdAt and updatedAt automatically
});

module.exports = Activity;


(async () => {
  try {
    await Activity.bulkCreate([
      {
        name: 'Morning Yoga',
        description: 'A calming yoga session to start the day right.',
        category: 'Wellness',
        startTime: new Date('2025-05-12T08:00:00'),
        endTime: new Date('2025-05-12T09:00:00'),
        duration: '1h',
        maxParticipants: 15,
        currentParticipants: 10,
        location: 'Studio A',
        status: 'Scheduled',
        difficultyLevel: 'Beginner',
        equipmentRequired: ['Yoga Mat'],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 1
      },
      {
        name: 'HIIT Blast',
        description: 'High-Intensity Interval Training for full-body workout.',
        category: 'Cardio',
        startTime: new Date('2025-05-12T10:00:00'),
        endTime: new Date('2025-05-12T10:45:00'),
        duration: '45m',
        maxParticipants: 20,
        currentParticipants: 18,
        location: 'Gym Floor',
        status: 'Scheduled',
        difficultyLevel: 'Advanced',
        equipmentRequired: ['Dumbbells', 'Kettlebell'],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 2
      },
      {
        name: 'Spin Class',
        description: 'Cardio-focused spinning workout with music.',
        category: 'Cardio',
        startTime: new Date('2025-05-12T17:00:00'),
        endTime: new Date('2025-05-12T18:00:00'),
        duration: '1h',
        maxParticipants: 25,
        currentParticipants: 20,
        location: 'Spin Room',
        status: 'Scheduled',
        difficultyLevel: 'Intermediate',
        equipmentRequired: ['Spin Bike'],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 3
      },
      {
        name: 'Pilates Core',
        description: 'Pilates session focused on core strength.',
        category: 'Strength',
        startTime: new Date('2025-05-13T11:00:00'),
        endTime: new Date('2025-05-13T12:00:00'),
        duration: '1h',
        maxParticipants: 12,
        currentParticipants: 9,
        location: 'Studio B',
        status: 'Scheduled',
        difficultyLevel: 'Intermediate',
        equipmentRequired: ['Mat', 'Resistance Bands'],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 4
      },
      {
        name: 'Zumba Dance',
        description: 'Dance-based cardio workout to energetic music.',
        category: 'Dance',
        startTime: new Date('2025-05-13T18:00:00'),
        endTime: new Date('2025-05-13T19:00:00'),
        duration: '1h',
        maxParticipants: 30,
        currentParticipants: 28,
        location: 'Studio C',
        status: 'Scheduled',
        difficultyLevel: 'Beginner',
        equipmentRequired: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 5
      },
      {
        name: 'Boxing Basics',
        description: 'Intro to boxing techniques and conditioning.',
        category: 'Combat',
        startTime: new Date('2025-05-14T16:00:00'),
        endTime: new Date('2025-05-14T17:00:00'),
        duration: '1h',
        maxParticipants: 10,
        currentParticipants: 10,
        location: 'Boxing Room',
        status: 'Full',
        difficultyLevel: 'Beginner',
        equipmentRequired: ['Boxing Gloves', 'Jump Rope'],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 6
      },
      {
        name: 'CrossFit Circuit',
        description: 'Functional strength training with CrossFit methods.',
        category: 'Strength',
        startTime: new Date('2025-05-15T07:00:00'),
        endTime: new Date('2025-05-15T08:00:00'),
        duration: '1h',
        maxParticipants: 16,
        currentParticipants: 14,
        location: 'Gym Floor',
        status: 'Scheduled',
        difficultyLevel: 'Advanced',
        equipmentRequired: ['Barbell', 'Box', 'Kettlebell'],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 7
      },
      {
        name: 'Stretch & Flex',
        description: 'Flexibility and mobility session for recovery.',
        category: 'Recovery',
        startTime: new Date('2025-05-15T09:00:00'),
        endTime: new Date('2025-05-15T09:45:00'),
        duration: '45m',
        maxParticipants: 20,
        currentParticipants: 12,
        location: 'Studio A',
        status: 'Scheduled',
        difficultyLevel: 'All Levels',
        equipmentRequired: ['Stretch Band'],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 8
      },
      {
        name: 'Aqua Aerobics',
        description: 'Low-impact aerobic workout in the pool.',
        category: 'Water Fitness',
        startTime: new Date('2025-05-15T13:00:00'),
        endTime: new Date('2025-05-15T14:00:00'),
        duration: '1h',
        maxParticipants: 20,
        currentParticipants: 15,
        location: 'Pool',
        status: 'Scheduled',
        difficultyLevel: 'Beginner',
        equipmentRequired: ['Water Dumbbells', 'Kickboard'],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 9
      },
      {
        name: 'Functional Training',
        description: 'Train for real-life movements using various tools.',
        category: 'Strength & Conditioning',
        startTime: new Date('2025-05-16T15:00:00'),
        endTime: new Date('2025-05-16T16:00:00'),
        duration: '1h',
        maxParticipants: 15,
        currentParticipants: 11,
        location: 'Training Zone',
        status: 'Scheduled',
        difficultyLevel: 'Intermediate',
        equipmentRequired: ['TRX', 'Battle Ropes'],
        createdAt: new Date(),
        updatedAt: new Date(),
        trainerId: 10
      }
    ]);

    console.log('Activity records inserted successfully.');
  } catch (error) {
    console.error('Error inserting activities:', error);
  }
})();
