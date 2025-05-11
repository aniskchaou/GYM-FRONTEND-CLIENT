
var sequelize = require("../db/init.sequelize.js");
//var Sequelize = require('sequelize');

/*var Attendance = sequelize.define('attendance', {
     title: Sequelize.STRING,
    date: Sequelize.STRING,
});
{
    "attendanceId": 7001,
    "memberId": 5001,
    "memberName": "John Doe",
    "staffId": 2005,
    "staffName": "Coach Michael",
    "checkInTime": "2024-03-05T06:30:00",
    "checkOutTime": "2024-03-05T08:00:00",
    "duration": "90 minutes",
    "sessionId": 1012,
    "sessionName": "Morning Strength Training",
    "attendanceType": "Gym Visit",
    "status": "Present",
    "deviceUsed": "RFID Scanner",
    "location": "Main Gym Floor",
    "notes": "Completed full workout session.",
    "createdAt": "2024-03-05T06:30:00",
    "updatedAt": "2024-03-05T08:00:00"
  } */
    const { Sequelize, DataTypes } = require('sequelize');
const { Session } = require("./booking.models.js");

    // Define the Member model
    /* const Member = sequelize.define('Member', {
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
    
   /*  // Define the Staff model
    const Staff = sequelize.define('Staff', {
      staffId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'staff',
      timestamps: true
    }); */
    
/*     // Define the Session model
    const Session = sequelize.define('Session', {
      sessionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'sessions',
      timestamps: true
    }); */
    
    // Define the Attendance model
    const Attendance = sequelize.define('Attendance', {
      attendanceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      checkInTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      checkOutTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false
      },
      attendanceType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      deviceUsed: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
       /*  references: {
          model: 'Member',
          key: 'memberId'
        } */
      },
      staffId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        /* references: {
          model: 'Staff',
          key: 'staffId'
        } */
      },
      sessionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        /* references: {
          model: 'Session',
          key: 'sessionId'
        } */
      }
    }, {
      tableName: 'attendances',
      timestamps: true
    });
    
    // Define associations
  /*   Attendance.belongsTo(Member, { foreignKey: 'memberId' });
    Member.hasMany(Attendance, { foreignKey: 'memberId' });
    
    Attendance.belongsTo(Staff, { foreignKey: 'staffId' });
    Staff.hasMany(Attendance, { foreignKey: 'staffId' });
    
    Attendance.belongsTo(Session, { foreignKey: 'sessionId' });
    Session.hasMany(Attendance, { foreignKey: 'sessionId' }); */
    
    module.exports = {Session, Attendance };
