
/* var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Member = sequelize.define('member', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    birth_date: Sequelize.STRING,
    groupe: Sequelize.STRING,
    activity: Sequelize.STRING,
    address: Sequelize.STRING,
    mobile: Sequelize.STRING,
    weight: Sequelize.STRING,
    size: Sequelize.STRING,
    start_date: Sequelize.STRING,
    end_date: Sequelize.STRING,
    type: Sequelize.STRING,
    coach: Sequelize.STRING
});


module.exports = Member; */

/* {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "dateOfBirth": "1990-05-15",
    "gender": "Male",
    "membership": {
      "type": "Platinum",
      "startDate": "2024-01-01",
      "endDate": "2025-01-01",
      "status": "Active",
      "paymentStatus": "Paid"
    },
    "preferences": {
      "notifications": true,
      "preferredWorkoutTime": "Morning",
      "goal": "Muscle Gain",
      "dietaryRestrictions": ["No Dairy"],
      "favoriteEquipment": ["Treadmill", "Dumbbells"],
      "classInterests": ["Yoga", "HIIT"]
    },
    "wearableDevice": {
      "deviceType": "Apple Watch",
      "lastSync": "2024-03-01T12:00:00Z",
      "heartRateAvg": 72,
      "caloriesBurned": 450,
      "steps": 9800,
      "sleepHours": 6.5
    },
    "workoutHistory": [
      {
        "date": "2024-02-28",
        "type": "Strength Training",
        "duration": "1h 15m",
        "caloriesBurned": 400
      },
      {
        "date": "2024-02-27",
        "type": "Cardio",
        "duration": "45m",
        "caloriesBurned": 350
      }
    ],
    "aiRecommendations": [
      "Increase protein intake for better muscle recovery",
      "Improve sleep schedule to optimize energy levels",
      "Try mixing strength and HIIT workouts for improved endurance"
    ]
  } */
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = require("../db/init.sequelize.js");
    
    const Member = sequelize.define('Member', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      membership: {
        type: DataTypes.JSON,
        allowNull: false
      },
      preferences: {
        type: DataTypes.JSON,
        allowNull: false
      },
      wearableDevice: {
        type: DataTypes.JSON,
        allowNull: false
      },
      workoutHistory: {
        type: DataTypes.JSON,
        allowNull: false
      },
      aiRecommendations: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'members',
      timestamps: true
    });
    
    module.exports = Member;

    const members = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        dateOfBirth: "1990-05-15",
        gender: "Male",
        membership: { type: "Premium", startDate: "2022-01-15", endDate: "2023-01-15" },
        preferences: { workoutTime: "Morning", preferredActivities: ["Yoga", "Cycling"] },
        wearableDevice: { type: "Smartwatch", brand: "Fitbit", model: "Versa 3" },
        workoutHistory: [{ date: "2022-01-16", workout: "Running", durationMinutes: 30 }],
        aiRecommendations: { hydration: "Drink more water", sleep: "Get at least 8 hours of sleep" }
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "234-567-8901",
        dateOfBirth: "1985-02-22",
        gender: "Female",
        membership: { type: "Standard", startDate: "2022-03-01", endDate: "2023-03-01" },
        preferences: { workoutTime: "Evening", preferredActivities: ["Strength Training", "Swimming"] },
        wearableDevice: { type: "Fitness Tracker", brand: "Garmin", model: "Vivosmart 4" },
        workoutHistory: [{ date: "2022-03-03", workout: "Strength Training", durationMinutes: 45 }],
        aiRecommendations: { proteinIntake: "Increase protein for muscle growth", workoutVariation: "Change workout routine weekly" }
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        phone: "345-678-9012",
        dateOfBirth: "1992-08-10",
        gender: "Female",
        membership: { type: "Premium", startDate: "2021-11-11", endDate: "2022-11-11" },
        preferences: { workoutTime: "Afternoon", preferredActivities: ["HIIT", "Cycling"] },
        wearableDevice: { type: "Smartwatch", brand: "Apple", model: "Series 7" },
        workoutHistory: [{ date: "2021-11-12", workout: "HIIT", durationMinutes: 40 }],
        aiRecommendations: { stamina: "Focus on endurance training", sleep: "Improve sleep quality" }
      },
      {
        firstName: "Bob",
        lastName: "Brown",
        email: "bob.brown@example.com",
        phone: "456-789-0123",
        dateOfBirth: "1980-01-05",
        gender: "Male",
        membership: { type: "Basic", startDate: "2022-07-01", endDate: "2023-07-01" },
        preferences: { workoutTime: "Morning", preferredActivities: ["Running", "Stretching"] },
        wearableDevice: { type: "Smartwatch", brand: "Samsung", model: "Galaxy Watch 4" },
        workoutHistory: [{ date: "2022-07-02", workout: "Running", durationMinutes: 40 }],
        aiRecommendations: { hydration: "Stay hydrated during runs", recovery: "Stretch after workouts" }
      },
      {
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
        phone: "567-890-1234",
        dateOfBirth: "1995-04-20",
        gender: "Male",
        membership: { type: "Standard", startDate: "2022-09-15", endDate: "2023-09-15" },
        preferences: { workoutTime: "Evening", preferredActivities: ["Strength Training", "Cycling"] },
        wearableDevice: { type: "Fitness Tracker", brand: "Polar", model: "Vantage M" },
        workoutHistory: [{ date: "2022-09-16", workout: "Cycling", durationMinutes: 60 }],
        aiRecommendations: { nutrition: "Increase carbs before workouts", sleep: "Prioritize sleep for recovery" }
      },
      {
        firstName: "David",
        lastName: "Wilson",
        email: "david.wilson@example.com",
        phone: "678-901-2345",
        dateOfBirth: "1990-07-30",
        gender: "Male",
        membership: { type: "Premium", startDate: "2021-05-15", endDate: "2022-05-15" },
        preferences: { workoutTime: "Morning", preferredActivities: ["Running", "Yoga"] },
        wearableDevice: { type: "Smartwatch", brand: "Fitbit", model: "Charge 5" },
        workoutHistory: [{ date: "2021-05-16", workout: "Running", durationMinutes: 30 }],
        aiRecommendations: { mobility: "Add more stretching to your routine", endurance: "Increase weekly running distance" }
      },
      {
        firstName: "Eve",
        lastName: "Martinez",
        email: "eve.martinez@example.com",
        phone: "789-012-3456",
        dateOfBirth: "1993-12-05",
        gender: "Female",
        membership: { type: "Standard", startDate: "2022-01-10", endDate: "2023-01-10" },
        preferences: { workoutTime: "Evening", preferredActivities: ["Swimming", "Pilates"] },
        wearableDevice: { type: "Smartwatch", brand: "Garmin", model: "Forerunner 245" },
        workoutHistory: [{ date: "2022-01-12", workout: "Swimming", durationMinutes: 45 }],
        aiRecommendations: { technique: "Improve swimming stroke efficiency", nutrition: "Increase omega-3 intake" }
      },
      {
        firstName: "Frank",
        lastName: "Taylor",
        email: "frank.taylor@example.com",
        phone: "890-123-4567",
        dateOfBirth: "1988-03-22",
        gender: "Male",
        membership: { type: "Premium", startDate: "2022-04-10", endDate: "2023-04-10" },
        preferences: { workoutTime: "Morning", preferredActivities: ["Strength Training", "Boxing"] },
        wearableDevice: { type: "Fitness Tracker", brand: "Apple", model: "Watch Series 6" },
        workoutHistory: [{ date: "2022-04-11", workout: "Boxing", durationMinutes: 30 }],
        aiRecommendations: { strength: "Focus on compound exercises", rest: "Ensure adequate recovery between workouts" }
      },
      {
        firstName: "Grace",
        lastName: "Anderson",
        email: "grace.anderson@example.com",
        phone: "901-234-5678",
        dateOfBirth: "1997-11-25",
        gender: "Female",
        membership: { type: "Standard", startDate: "2021-09-18", endDate: "2022-09-18" },
        preferences: { workoutTime: "Afternoon", preferredActivities: ["Running", "Pilates"] },
        wearableDevice: { type: "Smartwatch", brand: "Fitbit", model: "Inspire 2" },
        workoutHistory: [{ date: "2021-09-19", workout: "Running", durationMinutes: 40 }],
        aiRecommendations: { running: "Focus on improving pace", flexibility: "Increase pilates sessions" }
      }
    ];
    
    async function insertMembers() {
      try {
        const timestamp = new Date().toISOString();
    
        const memberRecords = members.map(member => ({
          ...member,
          createdAt: timestamp,
          updatedAt: timestamp
        }));
    
        await Member.bulkCreate(memberRecords);
        console.log("✅ 10 members added successfully!");
      } catch (error) {
        console.error("❌ Error inserting members:", error);
      }
    }
    
    insertMembers();