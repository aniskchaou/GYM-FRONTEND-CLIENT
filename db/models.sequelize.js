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
var History = require("../models/history.models.js")
var Member = require("../models/member.models.js")
var Payment = require("../models/payment.models.js")
var Presence = require("../models/presence.models.js")
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
sequelize.sync().then(function () {
    DashboardSettings.create(seeds.getDashboardSettings())
    EmailSettings.create(seeds.getEmailSettings())
    FooterSettings.create(seeds.getFooterSettings())
    HeaderSettings.create(seeds.getHeaderSettings())
    LocalisationSettings.create(seeds.getLocalisationSettings())
    NotificationSettings.create(seeds.getNotificationSettings())
   /* User.create();
    Activity.create();
    Booking.create();
    Course.create();
    Event.create();
    Excerice.create();
    Expense.create();
    Groupe.create();
    History.create();*/
    Member.create(seeds.memberSeed);
    /*Payment.create();
    Presence.create();
    Product.create();
    Revenue.create();
    TypeSub.create()*/
    HomePage.create(seeds.homePageSeed)
    //Currency.create()
    //Staff.create()
    SystemSettings.create(seeds.getSytemSettings())
   // Attendance.create()
}).then(function (res) {
    //console.log(res.get({ plain: true }));
});

