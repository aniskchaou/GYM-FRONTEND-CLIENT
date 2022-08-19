var express = require('express');
var routerr = express.Router();

var userController = require('../controllers/api/user.controllers')
var indexController = require('../controllers/home.controllers')
var activityController = require('../controllers/api/activity.controllers')
var revenueController = require('../controllers/api/revenue.controllers')
var courseController = require('../controllers/api/course.controllers')
var eventController = require('../controllers/api/event.controllers')
var exerciceController = require('../controllers/api/exercice.controllers')
var expenseController = require('../controllers/api/expense.controllers')
var groupeController = require('../controllers/api/groupe.controllers')
var historyController = require('../controllers/api/history.controllers')
var memberController = require('../controllers/api/member.controllers')
var paymentController = require('../controllers/api/payment.controllers')
var presenceController = require('../controllers/api/presence.controllers')
var productController = require('../controllers/api/product.controllers')
var typeSubsController = require('../controllers/api/type.subs.controllers')
var staffController = require('../controllers/api/staff.controllers')
var settingsController = require('../controllers/api/settings.controllers')
var frontOfficeController = require('../controllers/api/front.office.controllers')
var attendanceController = require('../controllers/api/attendance.controllers')
//users
routerr.post('/api/user', userController.create)
routerr.get('/api/user', userController.findAll)
routerr.get("/api/user/:id", userController.findOne);
routerr.put("/api/user/:id", userController.update);
routerr.delete("/api/user/:id", userController.delete);
routerr.delete("/api/user", userController.deleteAll);


//Home
routerr.get('/', indexController.getHome)
routerr.get("/api/frontoffice", frontOfficeController.findOne);
routerr.put("/api/frontoffice/:id", frontOfficeController.update);

//activity
routerr.post('/api/activity', activityController.create)
routerr.get('/api/activity', activityController.findAll)
routerr.get("/api/activity/:id", activityController.findOne);
routerr.put("/api/activity/:id", activityController.update);
routerr.delete("/api/activity/:id", activityController.delete);
routerr.delete("/api/activity", activityController.deleteAll);
routerr.get("/api/activitybydate", activityController.getActivityByDate);
routerr.get('/api/count/activity', activityController.getCount)

routerr.get("/api/attendance", attendanceController.findAll);
//booking
/*
routerr.post('/api/activity', activityController.create)
routerr.get('/api/activity', activityController.findAll)
routerr.get("/api/activity/:id", activityController.findOne);
routerr.put("/api/activity/:id", activityController.update);
routerr.delete("/api/activity/:id", activityController.delete);
routerr.delete("/api/activity", activityController.deleteAll);
*/
routerr.post('/api/attendance', attendanceController.create)
routerr.get('/api/attendance', attendanceController.findAll)

//course
routerr.post('/api/course', courseController.create)
routerr.get('/api/course', courseController.findAll)
routerr.get("/api/course/:id", courseController.findOne);
routerr.put("/api/course/:id", courseController.update);
routerr.delete("/api/course/:id", courseController.delete);
routerr.delete("/api/course", courseController.deleteAll);

//event
routerr.post('/api/event', eventController.create)
routerr.get('/api/event', eventController.findAll)
routerr.get("/api/event/:id", eventController.findOne);
routerr.put("/api/event/:id", eventController.update);
routerr.delete("/api/event/:id", eventController.delete);
routerr.delete("/api/event", eventController.deleteAll);

//exercice
routerr.post('/api/exercice', exerciceController.create)
routerr.get('/api/exercice', exerciceController.findAll)
routerr.get("/api/exercice/:id", exerciceController.findOne);
routerr.put("/api/exercice/:id", exerciceController.update);
routerr.delete("/api/exercice/:id", exerciceController.delete);
routerr.delete("/api/exercice", exerciceController.deleteAll);

//expense
routerr.post('/api/expense', expenseController.create)
routerr.get('/api/expense', expenseController.findAll)
routerr.get("/api/expense/:id", expenseController.findOne);
routerr.put("/api/expense/:id", expenseController.update);
routerr.delete("/api/expense/:id", expenseController.delete);
routerr.delete("/api/expense", expenseController.deleteAll);
routerr.get("/api/expensebydate", expenseController.getExpenseByDate);

//groupe
routerr.post('/api/groupe', groupeController.create)
routerr.get('/api/groupe', groupeController.findAll)
routerr.get("/api/groupe/:id", groupeController.findOne);
routerr.put("/api/groupe/:id", groupeController.update);
routerr.delete("/api/groupe/:id", groupeController.delete);
routerr.delete("/api/groupe", groupeController.deleteAll);
routerr.get('/api/count/group', groupeController.getCount)
//history
routerr.post('/api/history', historyController.create)
routerr.get('/api/history', historyController.findAll)
routerr.get("/api/history/:id", historyController.findOne);
routerr.put("/api/history/:id", historyController.update);
routerr.delete("/api/history/:id", historyController.delete);
routerr.delete("/api/history", historyController.deleteAll);

//member
routerr.post('/api/member', memberController.create)
routerr.get('/api/member', memberController.findAll)
routerr.get("/api/member/:id", memberController.findOne);
routerr.put("/api/member/:id", memberController.update);
routerr.delete("/api/member/:id", memberController.delete);
routerr.delete("/api/member", memberController.deleteAll);
routerr.get("/api/memberbydate", memberController.getMemberByDate);
routerr.get('/api/count/member', memberController.getCount)

//payment
routerr.post('/api/payment', paymentController.create)
routerr.get('/api/payment', paymentController.findAll)
routerr.get("/api/payment/:id", paymentController.findOne);
routerr.put("/api/payment/:id", paymentController.update);
routerr.delete("/api/payment/:id", paymentController.delete);
routerr.delete("/api/payment", paymentController.deleteAll);

//presence
routerr.post('/api/presence', presenceController.create)
routerr.get('/api/presence', presenceController.findAll)
routerr.get("/api/presence/:id", presenceController.findOne);
routerr.put("/api/presence/:id", presenceController.update);
routerr.delete("/api/presence/:id", presenceController.delete);
routerr.delete("/api/presence", presenceController.deleteAll);

//product
routerr.post('/api/product', productController.create)
routerr.get('/api/product', productController.findAll)
routerr.get("/api/product/:id", productController.findOne);
routerr.put("/api/product/:id", productController.update);
routerr.delete("/api/product/:id", productController.delete);
routerr.delete("/api/product", productController.deleteAll);

//revenue
routerr.post('/api/revenue', revenueController.create)
routerr.get('/api/revenue', revenueController.findAll)
routerr.get("/api/revenue/:id", revenueController.findOne);
routerr.put("/api/revenue/:id", revenueController.update);
routerr.delete("/api/revenue/:id", revenueController.delete);
routerr.delete("/api/revenue", revenueController.deleteAll);
routerr.get("/api/incomebydate", revenueController.getIncomeByDate);
//typesubs
routerr.post('/api/typesubs', typeSubsController.create)
routerr.get('/api/typesubs', typeSubsController.findAll)
routerr.get("/api/typesubs/:id", typeSubsController.findOne);
routerr.put("/api/typesubs/:id", typeSubsController.update);
routerr.delete("/api/typesubs/:id", typeSubsController.delete);
routerr.delete("/api/typesubs", typeSubsController.deleteAll);

//staff
routerr.post('/api/staff', staffController.create)
routerr.get('/api/staff', staffController.findAll)
routerr.get("/api/staff/:id", staffController.findOne);
routerr.put("/api/staff/:id", staffController.update);
routerr.delete("/api/staff/:id", staffController.delete);
routerr.delete("/api/staff", staffController.deleteAll);
routerr.get('/api/count/staff', staffController.getCount)
//settings
routerr.get("/api/syssettings", settingsController.findSystemSettings);
routerr.put("/api/edit/systemsettings/:id", settingsController.updateSystemSettings);
routerr.get("/api/restore/syssettings/:id", settingsController.restoreSystemSettings);


routerr.get("/api/dashboardsettings", settingsController.findDashboardSettings);
routerr.put("/api/edit/dashboardsettings/:id", settingsController.updateDashboardSettings);
routerr.get("/api/restore/dashboard/:id", settingsController.restoreDashboardSettings);

routerr.get("/api/emailtemplatesettings", settingsController.findEmailTemplateSettings);
//routerr.put("/api/edit/emailtemplatesettings/:id", settingsController.updateEmailTemplateSettings);

routerr.get("/api/emailsettings", settingsController.findEmailSettings);
routerr.put("/api/edit/emailsettings/:id", settingsController.updateEmailSettings);

routerr.get("/api/footersettings", settingsController.findFooterSettings);
routerr.put("/api/edit/footersettings/:id", settingsController.updateFooterSettings);
routerr.get("/api/restore/footer/:id", settingsController.restoreFooterSettings);

routerr.get("/api/headersettings", settingsController.findHeaderSettings);
routerr.put("/api/edit/headersettings/:id", settingsController.updateHeaderSettings);
routerr.get("/api/restore/header/:id", settingsController.restoreHeaderSettings);

routerr.get("/api/localisationsettings", settingsController.findLocalisationSettings);
routerr.put("/api/edit/localisationsettings/:id", settingsController.updateLocalisationSettings);

routerr.get("/api/notificationsettings", settingsController.findNotificationSettings);
routerr.put("/api/edit/notificationsettings/:id", settingsController.updateNotificationsSettings);
module.exports = routerr;