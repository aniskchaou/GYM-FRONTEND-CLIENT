
var sequelize = require("../db/init.sequelize.js");
const { Sequelize, DataTypes } = require('sequelize');


/* var Staff = sequelize.define('staff', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    date: Sequelize.STRING,
    role: Sequelize.STRING,
    mobile: Sequelize.STRING,
    address: Sequelize.STRING,
    email: Sequelize.STRING

});

module.exports = Staff; */

/* {
    "id": 6,
    "staffId": 2001,
    "name": "Sarah Lee",
    "role": "Personal Trainer",
    "contact": {
      "email": "sarah.lee@example.com",
      "phone": "+1234567891"
    },
    "schedule": [
      {
        "day": "Monday",
        "startTime": "8:00 AM",
        "endTime": "4:00 PM"
      },
      {
        "day": "Wednesday",
        "startTime": "12:00 PM",
        "endTime": "8:00 PM"
      }
    ],
    "certifications": ["Certified Strength Coach", "Yoga Instructor"],
    "performanceMetrics": {
      "clientSatisfaction": "95%",
      "classesConducted": 120,
      "personalTrainingSessions": 50
    }
  } */

    const Staff = sequelize.define('Staff', {
      staffId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contact: {
        type: DataTypes.JSON,
        allowNull: false
      },
      schedule: {
        type: DataTypes.JSON,
        allowNull: false
      },
      certifications: {
        type: DataTypes.JSON,
        allowNull: false
      },
      performanceMetrics: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'staff',
      timestamps: true
    });
    
    module.exports = Staff;



(async () => {
  try {
    await Staff.bulkCreate([
      {
        name: 'Alice Johnson',
        role: 'Trainer',
        contact: { phone: '1234567890', email: 'alice.johnson@example.com' },
        schedule: { mon: '9-5', tue: '9-5', wed: 'off', thu: '9-5', fri: '9-3' },
        certifications: ['CPR', 'Fitness Training'],
        performanceMetrics: { clients: 20, rating: 4.5 }
      },
      {
        name: 'Bob Smith',
        role: 'Manager',
        contact: { phone: '2345678901', email: 'bob.smith@example.com' },
        schedule: { mon: '9-6', tue: '9-6', wed: '9-6', thu: '9-6', fri: '9-6' },
        certifications: ['Business Management'],
        performanceMetrics: { teamSize: 5, rating: 4.8 }
      },
      {
        name: 'Carla Diaz',
        role: 'Receptionist',
        contact: { phone: '3456789012', email: 'carla.diaz@example.com' },
        schedule: { mon: '8-4', tue: '8-4', wed: '8-4', thu: '8-4', fri: '8-4' },
        certifications: ['Customer Service'],
        performanceMetrics: { callsHandled: 120, rating: 4.6 }
      },
      {
        name: 'David Lee',
        role: 'Trainer',
        contact: { phone: '4567890123', email: 'david.lee@example.com' },
        schedule: { mon: '10-6', tue: '10-6', wed: 'off', thu: '10-6', fri: '10-4' },
        certifications: ['Yoga Instructor', 'CPR'],
        performanceMetrics: { clients: 18, rating: 4.7 }
      },
      {
        name: 'Ella Brown',
        role: 'Nutritionist',
        contact: { phone: '5678901234', email: 'ella.brown@example.com' },
        schedule: { mon: '9-3', tue: '9-3', wed: '9-3', thu: '9-3', fri: 'off' },
        certifications: ['Nutrition Science'],
        performanceMetrics: { consultations: 30, rating: 4.9 }
      },
      {
        name: 'Frank Green',
        role: 'Cleaner',
        contact: { phone: '6789012345', email: 'frank.green@example.com' },
        schedule: { mon: '6-2', tue: '6-2', wed: '6-2', thu: '6-2', fri: '6-2' },
        certifications: ['Sanitation'],
        performanceMetrics: { areasCleaned: 15, incidents: 0 }
      },
      {
        name: 'Grace Kim',
        role: 'Trainer',
        contact: { phone: '7890123456', email: 'grace.kim@example.com' },
        schedule: { mon: '12-8', tue: '12-8', wed: 'off', thu: '12-8', fri: '12-6' },
        certifications: ['HIIT Specialist'],
        performanceMetrics: { clients: 25, rating: 4.4 }
      },
      {
        name: 'Henry Zhao',
        role: 'IT Support',
        contact: { phone: '8901234567', email: 'henry.zhao@example.com' },
        schedule: { mon: '9-5', tue: '9-5', wed: '9-5', thu: '9-5', fri: '9-5' },
        certifications: ['ITIL', 'Network Admin'],
        performanceMetrics: { ticketsResolved: 40, rating: 4.7 }
      },
      {
        name: 'Ivy Nguyen',
        role: 'Receptionist',
        contact: { phone: '9012345678', email: 'ivy.nguyen@example.com' },
        schedule: { mon: '8-4', tue: '8-4', wed: '8-4', thu: '8-4', fri: '8-4' },
        certifications: ['Office Admin'],
        performanceMetrics: { appointmentsScheduled: 200, rating: 4.6 }
      },
      {
        name: 'Jack Wilson',
        role: 'Trainer',
        contact: { phone: '0123456789', email: 'jack.wilson@example.com' },
        schedule: { mon: '7-3', tue: '7-3', wed: '7-3', thu: '7-3', fri: '7-3' },
        certifications: ['CrossFit Coach'],
        performanceMetrics: { clients: 22, rating: 4.3 }
      }
    ]);

    console.log('Staff inserted successfully.');
  } catch (error) {
    console.error('Error inserting staff:', error);
  }
})();

