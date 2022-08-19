var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Course = sequelize.define('course', {
    name: Sequelize.STRING
});


module.exports = Course;
/*
Class Name *
Select Staff Member *
Select Staff Member
Select Assistant Staff Member
Select Staff Member
Location
Class Booking Fees *
$
Select Days *
Start Time *
9:15
End Time *
9:15
*/