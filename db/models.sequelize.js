var User = require("../models/user.models.js")
var sequelize = require("../db/init.sequelize")
var Sequelize = require('sequelize');
var seeds = require("./seeds.sequelize")
var Activity = require("../models/activity.models.js")
var Booking = require("../models/booking.models.js")
var Course = require("../models/course.models.js")
var Event = require("../models/event.models.js")
var Excerice = require("../models/exercice.models.js")
var Groupe = require("../models/groupe.models.js")
var Member = require("../models/member.models.js")
var Payment = require("../models/payment.models.js")
var Product = require("../models/product.models.js")
var Revenue = require("../models/revenue.models.js")
var Expense = require("../models/expense.models.js")
var TypeSub = require("../models/type.subs.models.js")
var HomePage = require("../models/frontoffice/home.page.models.js")
var Currency = require("../models/currency.models.js")
var Staff = require("../models/staff.models.js")
var SystemSettings = require("../models/settings/system.settings.models.js")
var DashboardSettings = require("../models/settings/dashboard.settings.models.js")
var EmailSettings = require("../models/settings/email.settings.models.js")
var EmailTemplateSettings = require("../models/settings/email.template.settings.models.js")
var FooterSettings = require("../models/settings/footer.settings.models.js")
var HeaderSettings = require("../models/settings/header.settings.models.js")
var LocalisationSettings = require("../models/settings/localisation.settings.models.js")
var NotificationSettings = require("../models/settings/notification.settings.models.js")
var Attendance = require("../models/attendance.models.js")
var NutritionPlan =require('../models/nutritionplan.js')

 sequelize.sync({ force: true }).then(async  ()=> {
   DashboardSettings.create(seeds.getDashboardSettings())
    EmailSettings.create(seeds.getEmailSettings())
    FooterSettings.create(seeds.getFooterSettings())
    HeaderSettings.create(seeds.getHeaderSettings())
    LocalisationSettings.create(seeds.getLocalisationSettings())
    NotificationSettings.create(seeds.getNotificationSettings())
    SystemSettings.create(seeds.getSytemSettings()) 
    /*  //User.create(seeds.userSeed);
    //HomePage.create(seeds.homePageSeed)
    //Staff.create()
   
    
    //await createActivity();
    //await createBooking();*/ await insertStaff()
await   insertUsers();
}).catch(function (res) {
    console.log(res)
});


 async function insertStaff() {
    try {
      const staffMembers = [
        {
          name: "John Doe",
          role: "Head Trainer",
          contact: { phone: "555-1234", email: "johndoe@gym.com", address: "123 Fitness St, NY" },
          schedule: { days: ["Monday", "Wednesday", "Friday"], shift: "Morning", hours: "6:00 AM - 2:00 PM" },
          certifications: ["NASM Certified", "CPR"],
          performanceMetrics: { customerFeedback: "95%", classesConducted: 50, attendance: "98%" },
        },
        {
          name: "Emily Smith",
          role: "Yoga Instructor",
          contact: { phone: "555-5678", email: "emilysmith@gym.com", address: "456 Wellness Ave, NY" },
          schedule: { days: ["Tuesday", "Thursday", "Saturday"], shift: "Evening", hours: "4:00 PM - 9:00 PM" },
          certifications: ["RYT-200", "Mindfulness Training"],
          performanceMetrics: { customerFeedback: "92%", classesConducted: 40, attendance: "95%" },
        },
        {
          name: "Michael Brown",
          role: "Strength Coach",
          contact: { phone: "555-8765", email: "michaelbrown@gym.com", address: "789 Muscle Rd, NY" },
          schedule: { days: ["Monday", "Wednesday", "Friday"], shift: "Afternoon", hours: "12:00 PM - 8:00 PM" },
          certifications: ["NSCA-CSCS", "Sports Nutrition"],
          performanceMetrics: { customerFeedback: "97%", classesConducted: 60, attendance: "99%" },
        },
        {
          name: "Jessica Davis",
          role: "Front Desk Manager",
          contact: { phone: "555-4321", email: "jessicadavis@gym.com", address: "321 Admin St, NY" },
          schedule: { days: ["Monday", "Tuesday", "Thursday"], shift: "Morning", hours: "7:00 AM - 3:00 PM" },
          certifications: ["Customer Service Training", "Gym Management"],
          performanceMetrics: { customerFeedback: "89%", classesConducted: 0, attendance: "100%" },
        },
        {
          name: "David Wilson",
          role: "Personal Trainer",
          contact: { phone: "555-6789", email: "davidwilson@gym.com", address: "567 Fitness Blvd, NY" },
          schedule: { days: ["Monday", "Wednesday", "Friday"], shift: "Evening", hours: "4:00 PM - 10:00 PM" },
          certifications: ["ACE Certified", "Kettlebell Training"],
          performanceMetrics: { customerFeedback: "94%", classesConducted: 45, attendance: "96%" },
        },
        {
          name: "Sophia Miller",
          role: "Pilates Instructor",
          contact: { phone: "555-3456", email: "sophiamiller@gym.com", address: "789 Core Ave, NY" },
          schedule: { days: ["Tuesday", "Thursday", "Saturday"], shift: "Morning", hours: "8:00 AM - 2:00 PM" },
          certifications: ["STOTT Pilates Certified", "Rehab Exercise Specialist"],
          performanceMetrics: { customerFeedback: "91%", classesConducted: 35, attendance: "93%" },
        },
        {
          name: "Daniel Martinez",
          role: "Gym Cleaner",
          contact: { phone: "555-1111", email: "danielmartinez@gym.com", address: "456 Maintenance St, NY" },
          schedule: { days: ["Monday", "Wednesday", "Friday"], shift: "Night", hours: "10:00 PM - 6:00 AM" },
          certifications: ["OSHA Certified", "Sanitation Training"],
          performanceMetrics: { customerFeedback: "90%", classesConducted: 0, attendance: "100%" },
        },
        {
          name: "Olivia Garcia",
          role: "Group Fitness Instructor",
          contact: { phone: "555-2222", email: "oliviagarcia@gym.com", address: "987 Cardio Ln, NY" },
          schedule: { days: ["Monday", "Tuesday", "Thursday"], shift: "Evening", hours: "5:00 PM - 10:00 PM" },
          certifications: ["Zumba Certified", "Les Mills Instructor"],
          performanceMetrics: { customerFeedback: "96%", classesConducted: 55, attendance: "97%" },
        },
        {
          name: "Liam Anderson",
          role: "Boxing Coach",
          contact: { phone: "555-3333", email: "liamanderson@gym.com", address: "654 Combat St, NY" },
          schedule: { days: ["Wednesday", "Friday", "Sunday"], shift: "Afternoon", hours: "12:00 PM - 6:00 PM" },
          certifications: ["USA Boxing Certified", "Self-Defense Training"],
          performanceMetrics: { customerFeedback: "93%", classesConducted: 40, attendance: "95%" },
        },
        {
          name: "Emma Thomas",
          role: "Dietitian",
          contact: { phone: "555-4444", email: "emmathomas@gym.com", address: "321 Nutrition Ave, NY" },
          schedule: { days: ["Monday", "Thursday", "Saturday"], shift: "Morning", hours: "9:00 AM - 3:00 PM" },
          certifications: ["Registered Dietitian", "Sports Nutrition Certification"],
          performanceMetrics: { customerFeedback: "98%", classesConducted: 30, attendance: "99%" },
        }
      ];
  
      // Duplicating the list to create 20 entries
      while (staffMembers.length < 20) {
        staffMembers.push(...staffMembers.slice(0, 20 - staffMembers.length));
      }
  
       await Staff.bulkCreate(staffMembers);
      console.log("20 real gym staff members inserted successfully!");
    } catch (error) {
      console.error("Error inserting staff members:", error);
    }
  }
  
  //insertStaff();
  
  const users = [
    { 
      username: "johndoe", 
      password: "john123", 
      name: "John Doe", 
      email: "johndoe@example.com", 
      phone: "555-1001", 
      role: "Member", 
      membershipType: "Gold", 
      loyaltyPoints: 150, 
      status: "Active" 
    },
    { 
      username: "admin", 
      password: "admin", 
      name: "Jane Smith", 
      email: "janesmith@example.com", 
      phone: "555-1002", 
      role: "Trainer", 
      membershipType: "Platinum", 
      loyaltyPoints: 300, 
      status: "Active" 
    },
    { 
      username: "michaelbrown", 
      password: "mike123", 
      name: "Michael Brown", 
      email: "michaelbrown@example.com", 
      phone: "555-1003", 
      role: "Member", 
      membershipType: "Silver", 
      loyaltyPoints: 80, 
      status: "Active" 
    },
    { 
      username: "emilydavis", 
      password: "emily123", 
      name: "Emily Davis", 
      email: "emilydavis@example.com", 
      phone: "555-1004", 
      role: "Admin", 
      membershipType: "Staff", 
      loyaltyPoints: 500, 
      status: "Active" 
    },
    { 
      username: "davidwilson", 
      password: "david123", 
      name: "David Wilson", 
      email: "davidwilson@example.com", 
      phone: "555-1005", 
      role: "Member", 
      membershipType: "Gold", 
      loyaltyPoints: 200, 
      status: "Inactive" 
    },
    { 
      username: "emmajohnson", 
      password: "emma123", 
      name: "Emma Johnson", 
      email: "emmajohnson@example.com", 
      phone: "555-1006", 
      role: "Trainer", 
      membershipType: "Platinum", 
      loyaltyPoints: 350, 
      status: "Active" 
    },
    { 
      username: "liammartinez", 
      password: "liam123", 
      name: "Liam Martinez", 
      email: "liammartinez@example.com", 
      phone: "555-1007", 
      role: "Member", 
      membershipType: "Silver", 
      loyaltyPoints: 60, 
      status: "Active" 
    },
    { 
      username: "oliviagarcia", 
      password: "olivia123", 
      name: "Olivia Garcia", 
      email: "oliviagarcia@example.com", 
      phone: "555-1008", 
      role: "Member", 
      membershipType: "Gold", 
      loyaltyPoints: 250, 
      status: "Active" 
    },
    { 
      username: "noahtaylor", 
      password: "noah123", 
      name: "Noah Taylor", 
      email: "noahtaylor@example.com", 
      phone: "555-1009", 
      role: "Trainer", 
      membershipType: "Platinum", 
      loyaltyPoints: 400, 
      status: "Active" 
    },
    { 
      username: "sophiaanderson", 
      password: "sophia123", 
      name: "Sophia Anderson", 
      email: "sophiaanderson@example.com", 
      phone: "555-1010", 
      role: "Member", 
      membershipType: "Silver", 
      loyaltyPoints: 100, 
      status: "Active" 
    },
    // Add more users...
  ];
  
  async function insertUsers() {
    try {
      const timestamp = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
  
      const usersWithTimestamps = users.map(user => ({
        ...user,
        createdAt: timestamp,
        updatedAt: timestamp
      }));
  
      await User.bulkCreate(usersWithTimestamps);
      console.log("✅ 20 users added successfully!");
    } catch (error) {
      console.error("❌ Error inserting users:", error);
    }
  }
  
  async function createActivity() {
    try {
      // Assuming the trainer already exists
    /*   const trainer = await Trainer.create({
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
      }); */
  
      // Create a new activity and associate it with the trainer
      const activity = await Activity.create({
        name: 'Yoga Class',
        description: 'A beginner-friendly yoga class focusing on flexibility.',
        category: 'Flexibility',
        startTime: '2025-03-10T10:00:00',
        endTime: '2025-03-10T11:00:00',
        duration: '1 hour',
        maxParticipants: 20,
        currentParticipants: 10,
        location: 'Room A',
        status: 'Active',
        difficultyLevel: 'Beginner',
        equipmentRequired: ['Yoga Mats'],
        trainerId:1
      });
  
      console.log('Activity created successfully:', activity);
    } catch (error) {
      console.error('Error creating activity:', error);
    }
  }
  
  async function createBooking() {
    try {
      const session = await Session.create({
        classType: 'Yoga',
        trainer: 'John Doe',
        level: 'Beginner',
        date: '2025-03-09',
        time: '10:00',
        duration: '1 hour'
      });
  
      const member = await Member.create({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        phone: '1234567890',
        dateOfBirth: '1990-05-12',
        gender: 'Female',
        membership: {},
        preferences: {},
        wearableDevice: {},
        workoutHistory: [],
        aiRecommendations: {}
      });
  
      const booking = await Booking.create({
        bookingStatus: 'Confirmed',
        cancellationPolicy: '24-hour cancellation required',
        memberId: member.id,
        sessionId: session.id
      });
  
      console.log('Booking created successfully:', booking);
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  }
  
  