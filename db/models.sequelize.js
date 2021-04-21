var User = require("../models/user.models.js")
var sequelize = require("../db/init.sequelize")
var Sequelize = require('sequelize');
var user = require("./seeds.sequelize")

console.log(user)

sequelize.sync().then(function () {
    return User.create(user.userSeed);
}).then(function (res) {
    console.log(res.get({ plain: true }));
});

