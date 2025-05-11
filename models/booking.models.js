
var sequelize = require("../db/init.sequelize.js");
// var Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

/* var Booking = sequelize.define('booking', {
    name: Sequelize.STRING,
    date: Sequelize.STRING
});

{
    "id": 2,
    "bookingId": 7001,
    "memberId": 101,
    "session": {
      "sessionId": 601,
      "classType": "HIIT Training",
      "trainer": "Sarah Lee",
      "level": "Intermediate",
      "schedule": {
        "date": "2024-03-10",
        "time": "6:00 PM",
        "duration": "60 minutes"
      }
    },
    "bookingStatus": "Confirmed",
    "cancellationPolicy": "24-hour notice required",
    "pastBookings": [
      {
        "date": "2024-02-28",
        "session": "Yoga Basics",
        "status": "Attended"
      },
      {
        "date": "2024-02-25",
        "session": "Strength Training",
        "status": "Cancelled"
      }
    ]
  }
   */
  

/* // Define the Member model
const Member = sequelize.define('Member', {
  memberId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'members',
  timestamps: true
}); */

// Define the Session model
const Session = sequelize.define('Session', {
  sessionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  classType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  trainer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'sessions',
  timestamps: true
});

// Define the Booking model
const Booking = sequelize.define('Booking', {
  bookingId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  bookingStatus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cancellationPolicy: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pastBookings: {
    type: DataTypes.JSON,
    allowNull: true
  },
  memberId: {
    type: DataTypes.INTEGER,
    allowNull: false,
   /*  references: {
      model: 'Member',
      key: 'memberId'
    } */
  },
  sessionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
   /*  references: {
      model: 'Session',
      key: 'sessionId'
    } */
  }
}, {
  tableName: 'bookings',
  timestamps: true
});

// Define associations
/* Booking.belongsTo(Member, { foreignKey: 'memberId' }); */
/* Member.hasMany(Booking, { foreignKey: 'memberId' }); */

Booking.belongsTo(Session, { foreignKey: 'sessionId' });
Session.hasMany(Booking, { foreignKey: 'sessionId' });

module.exports = {Session, Booking };

