/* {
    "id": 101,
    "firstName": "Emily",
    "lastName": "Smith",
    "email": "emily.smith@example.com",
    "phone": "+9876543210",
    "role": "Personal Trainer",
    "specializations": ["Strength Training", "Yoga", "Nutrition"],
    "certifications": [
      "Certified Personal Trainer (CPT)",
      "Sports Nutrition Specialist",
      "Yoga Instructor"
    ],
    "experienceYears": 10,
    "availability": [
      {
        "day": "Monday",
        "start": "08:00",
        "end": "16:00"
      },
      {
        "day": "Wednesday",
        "start": "12:00",
        "end": "20:00"
      }
    ],
    "ratings": 4.8,
    "reviews": [
      {
        "memberId": 1,
        "review": "Excellent trainer with deep knowledge of strength training!",
        "rating": 5
      },
      {
        "memberId": 2,
        "review": "Very patient and professional.",
        "rating": 4.7
      }
    ],
    "performanceMetrics": {
      "totalSessions": 520,
      "avgClientProgress": "15% muscle gain in 3 months",
      "clientRetentionRate": 92,
      "aiPerformanceAnalysis": "Trainer is excellent in motivation but can improve in personalized meal planning"
    }
  } */
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = require("../db/init.sequelize.js");
    
    const Trainer = sequelize.define('Trainer', {
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
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      specializations: {
        type: DataTypes.JSON,
        allowNull: false
      },
      certifications: {
        type: DataTypes.JSON,
        allowNull: false
      },
      experienceYears: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      availability: {
        type: DataTypes.JSON,
        allowNull: false
      },
      ratings: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      reviews: {
        type: DataTypes.JSON,
        allowNull: false
      },
      performanceMetrics: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'trainers',
      timestamps: true
    });
    
    module.exports = Trainer;

    const trainers = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gym.com",
        phone: "555-1234",
        role: "Head Trainer",
        specializations: ["Strength Training", "Cardio Workouts"],
        certifications: ["NASM Certified", "CPR"],
        experienceYears: 10,
        availability: { days: ["Monday", "Wednesday", "Friday"], shift: "Morning", hours: "6:00 AM - 2:00 PM" },
        ratings: 4.9,
        reviews: [{ user: "Alice", comment: "Excellent coach!", rating: 5 }],
        performanceMetrics: { customerFeedback: "95%", classesConducted: 50, attendance: "98%" }
      },
      {
        firstName: "Emily",
        lastName: "Smith",
        email: "emilysmith@gym.com",
        phone: "555-5678",
        role: "Yoga Instructor",
        specializations: ["Yoga", "Mindfulness Training"],
        certifications: ["RYT-200", "Mindfulness Training"],
        experienceYears: 7,
        availability: { days: ["Tuesday", "Thursday", "Saturday"], shift: "Evening", hours: "4:00 PM - 9:00 PM" },
        ratings: 4.8,
        reviews: [{ user: "Tom", comment: "Great for stress relief!", rating: 5 }],
        performanceMetrics: { customerFeedback: "92%", classesConducted: 40, attendance: "95%" }
      },
      {
        firstName: "Michael",
        lastName: "Brown",
        email: "michaelbrown@gym.com",
        phone: "555-8765",
        role: "Strength Coach",
        specializations: ["Powerlifting", "Weightlifting"],
        certifications: ["NSCA-CSCS", "Sports Nutrition"],
        experienceYears: 8,
        availability: { days: ["Monday", "Wednesday", "Friday"], shift: "Afternoon", hours: "12:00 PM - 8:00 PM" },
        ratings: 4.7,
        reviews: [{ user: "Jake", comment: "Tough but effective!", rating: 4.5 }],
        performanceMetrics: { customerFeedback: "97%", classesConducted: 60, attendance: "99%" }
      },
      {
        firstName: "Jessica",
        lastName: "Davis",
        email: "jessicadavis@gym.com",
        phone: "555-4321",
        role: "Front Desk Manager",
        specializations: ["Customer Service", "Gym Management"],
        certifications: ["Customer Service Training", "Gym Management"],
        experienceYears: 5,
        availability: { days: ["Monday", "Tuesday", "Thursday"], shift: "Morning", hours: "7:00 AM - 3:00 PM" },
        ratings: 4.5,
        reviews: [{ user: "Sarah", comment: "Always helpful!", rating: 5 }],
        performanceMetrics: { customerFeedback: "89%", classesConducted: 0, attendance: "100%" }
      },
      {
        firstName: "David",
        lastName: "Wilson",
        email: "davidwilson@gym.com",
        phone: "555-6789",
        role: "Personal Trainer",
        specializations: ["Bodybuilding", "Nutrition"],
        certifications: ["ACE Certified", "Sports Nutrition"],
        experienceYears: 6,
        availability: { days: ["Monday", "Wednesday", "Friday"], shift: "Evening", hours: "4:00 PM - 10:00 PM" },
        ratings: 4.6,
        reviews: [{ user: "Brian", comment: "Helped me transform my body!", rating: 5 }],
        performanceMetrics: { customerFeedback: "96%", classesConducted: 45, attendance: "97%" }
      },
      {
        firstName: "Sophia",
        lastName: "Martinez",
        email: "sophiamartinez@gym.com",
        phone: "555-3456",
        role: "Pilates Instructor",
        specializations: ["Pilates", "Core Strength"],
        certifications: ["STOTT Pilates", "Functional Training"],
        experienceYears: 9,
        availability: { days: ["Tuesday", "Thursday", "Saturday"], shift: "Morning", hours: "8:00 AM - 12:00 PM" },
        ratings: 4.9,
        reviews: [{ user: "Laura", comment: "Amazing for core strength!", rating: 5 }],
        performanceMetrics: { customerFeedback: "94%", classesConducted: 35, attendance: "96%" }
      },
      {
        firstName: "Daniel",
        lastName: "Garcia",
        email: "danielgarcia@gym.com",
        phone: "555-7890",
        role: "Kickboxing Coach",
        specializations: ["Kickboxing", "Self-Defense"],
        certifications: ["Muay Thai Certified", "Self-Defense Training"],
        experienceYears: 12,
        availability: { days: ["Monday", "Wednesday", "Friday"], shift: "Afternoon", hours: "2:00 PM - 8:00 PM" },
        ratings: 4.8,
        reviews: [{ user: "Mike", comment: "Best striking coach!", rating: 5 }],
        performanceMetrics: { customerFeedback: "91%", classesConducted: 55, attendance: "94%" }
      },
      {
        firstName: "Olivia",
        lastName: "Lee",
        email: "olivialee@gym.com",
        phone: "555-6543",
        role: "Zumba Instructor",
        specializations: ["Zumba", "Dance Fitness"],
        certifications: ["Zumba Certified", "Aerobics"],
        experienceYears: 6,
        availability: { days: ["Monday", "Wednesday", "Saturday"], shift: "Evening", hours: "5:00 PM - 9:00 PM" },
        ratings: 4.7,
        reviews: [{ user: "Anna", comment: "So much fun!", rating: 5 }],
        performanceMetrics: { customerFeedback: "98%", classesConducted: 50, attendance: "99%" }
      },
      {
        firstName: "Ethan",
        lastName: "Robinson",
        email: "ethanrobinson@gym.com",
        phone: "555-1239",
        role: "CrossFit Coach",
        specializations: ["CrossFit", "HIIT"],
        certifications: ["CrossFit Level 1", "HIIT Instructor"],
        experienceYears: 7,
        availability: { days: ["Tuesday", "Thursday", "Sunday"], shift: "Afternoon", hours: "12:00 PM - 6:00 PM" },
        ratings: 4.9,
        reviews: [{ user: "Chris", comment: "Brutal workouts but worth it!", rating: 5 }],
        performanceMetrics: { customerFeedback: "93%", classesConducted: 40, attendance: "95%" }
      },
      {
        firstName: "Ava",
        lastName: "Clark",
        email: "avaclark@gym.com",
        phone: "555-9876",
        role: "Dietitian",
        specializations: ["Nutrition", "Meal Planning"],
        certifications: ["Registered Dietitian", "Sports Nutrition Certification"],
        experienceYears: 8,
        availability: { days: ["Monday", "Thursday", "Saturday"], shift: "Morning", hours: "9:00 AM - 3:00 PM" },
        ratings: 4.9,
        reviews: [{ user: "Linda", comment: "Amazing meal plans!", rating: 5 }],
        performanceMetrics: { customerFeedback: "98%", classesConducted: 30, attendance: "99%" }
      }
    ];
    
    async function insertTrainers() {
      try {
        const timestamp = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
    
        const trainersWithTimestamps = trainers.map(trainer => ({
          ...trainer,
          createdAt: timestamp,
          updatedAt: timestamp
        }));
    
        await Trainer.bulkCreate(trainersWithTimestamps);
        console.log("✅ 10 trainers added successfully!");
      } catch (error) {
        console.error("❌ Error inserting trainers:", error);
      }
    }
    
    insertTrainers();    