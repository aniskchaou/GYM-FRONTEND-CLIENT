var express = require('express');
var router = express.Router();

var userController = require('../controllers/api/user.controllers')
var indexController = require('../controllers/home.controllers')
var activityController = require('../controllers/api/activity.controllers')
var revenueController = require('../controllers/api/revenue.controllers')
var courseController = require('../controllers/api/course.controllers')
var eventController = require('../controllers/api/event.controllers')
var exerciceController = require('../controllers/api/exercice.controllers')
var expenseController = require('../controllers/api/expense.controllers')
var groupeController = require('../controllers/api/groupe.controllers')
var memberController = require('../controllers/api/member.controllers')
var paymentController = require('../controllers/api/payment.controllers')
var productController = require('../controllers/api/product.controllers')
var typeSubsController = require('../controllers/api/type.subs.controllers')
var staffController = require('../controllers/api/staff.controllers')
var settingsController = require('../controllers/api/settings.controllers')
var frontOfficeController = require('../controllers/api/front.office.controllers')
var attendanceController = require('../controllers/api/attendance.controllers')

const nutritionPlanController = require('../controllers/api/nutritionplan.controller');
const onDemandTrainingController = require('../controllers/api/ondemantraing.controller');
const programController = require('../controllers/api/program.controller');
const recoveryController = require('../controllers/api/recovery.controller');
const smartLockerController = require('../controllers/api/smartlocker.controller');
const storeController = require('../controllers/api/store.controller');
const trainerController = require('../controllers/api/trainer.controller');
const virtualCoachingController = require('../controllers/api/virtualCoaching.controller');

//users
router.post("/api/user/login", userController.login);
router.put("/api/user/:id", userController.update);
router.get("/api/user/:id", userController.findOne);

//Home
router.get('/', indexController.getHome)
router.get("/api/frontoffice", frontOfficeController.findOne);
router.put("/api/frontoffice/:id", frontOfficeController.update);
router.get("/admin", indexController.signin);


//activity
router.post('/api/activity', activityController.create)
router.get('/api/activity', activityController.findAll)
router.get("/api/activity/:id", activityController.findOne);
router.put("/api/activity/:id", activityController.update);
router.delete("/api/activity/:id", activityController.delete);
router.delete("/api/activity", activityController.deleteAll);
router.get("/api/activitybydate", activityController.getActivityByDate);
router.get('/api/count/activity', activityController.getCount)
router.get("/api/attendance", attendanceController.findAll);

//attendance
router.post('/api/attendance', attendanceController.create)
router.get('/api/attendance', attendanceController.findAll)

//course
router.post('/api/course', courseController.create)
router.get('/api/course', courseController.findAll)
router.get("/api/course/:id", courseController.findOne);
router.put("/api/course/:id", courseController.update);
router.delete("/api/course/:id", courseController.delete);
router.delete("/api/course", courseController.deleteAll);

//event
router.post('/api/event', eventController.create)
router.get('/api/event', eventController.findAll)
router.get("/api/event/:id", eventController.findOne);
router.put("/api/event/:id", eventController.update);
router.delete("/api/event/:id", eventController.delete);
router.delete("/api/event", eventController.deleteAll);

//exercice
router.post('/api/exercice', exerciceController.create)
router.get('/api/exercice', exerciceController.findAll)
router.get("/api/exercice/:id", exerciceController.findOne);
router.put("/api/exercice/:id", exerciceController.update);
router.delete("/api/exercice/:id", exerciceController.delete);
router.delete("/api/exercice", exerciceController.deleteAll);

//expense
router.post('/api/expense', expenseController.create)
router.get('/api/expense', expenseController.findAll)
router.get("/api/expense/:id", expenseController.findOne);
router.put("/api/expense/:id", expenseController.update);
router.delete("/api/expense/:id", expenseController.delete);
router.delete("/api/expense", expenseController.deleteAll);
router.get("/api/expensebydate", expenseController.getExpenseByDate);

//groupe
router.post('/api/groupe', groupeController.create)
router.get('/api/groupe', groupeController.findAll)
router.get("/api/groupe/:id", groupeController.findOne);
router.put("/api/groupe/:id", groupeController.update);
router.delete("/api/groupe/:id", groupeController.delete);
router.delete("/api/groupe", groupeController.deleteAll);
router.get('/api/count/group', groupeController.getCount)




//member
router.post('/api/member', memberController.create)
router.get('/api/member', memberController.findAll)
router.get("/api/member/:id", memberController.findOne);
router.put("/api/member/:id", memberController.update);
router.delete("/api/member/:id", memberController.delete);
router.delete("/api/member", memberController.deleteAll);
router.get("/api/memberbydate", memberController.getMemberByDate);
router.get('/api/count/member', memberController.getCount)
router.get('/api/search/member/:name', memberController.search)


//payment
router.post('/api/payment', paymentController.create)
router.get('/api/payment', paymentController.findAll)
router.get("/api/payment/:id", paymentController.findOne);
router.put("/api/payment/:id", paymentController.update);
router.delete("/api/payment/:id", paymentController.delete);
router.delete("/api/payment", paymentController.deleteAll);

//presence

//product
router.post('/api/product', productController.create)
router.get('/api/product', productController.findAll)
router.get("/api/product/:id", productController.findOne);
router.put("/api/product/:id", productController.update);
router.delete("/api/product/:id", productController.delete);
router.delete("/api/product", productController.deleteAll);

//revenue
router.post('/api/revenue', revenueController.create)
router.get('/api/revenue', revenueController.findAll)
router.get("/api/revenue/:id", revenueController.findOne);
router.put("/api/revenue/:id", revenueController.update);
router.delete("/api/revenue/:id", revenueController.delete);
router.delete("/api/revenue", revenueController.deleteAll);
router.get("/api/incomebydate", revenueController.getIncomeByDate);

//typesubs
router.post('/api/typesubs', typeSubsController.create)
router.get('/api/typesubs', typeSubsController.findAll)
router.get("/api/typesubs/:id", typeSubsController.findOne);
router.put("/api/typesubs/:id", typeSubsController.update);
router.delete("/api/typesubs/:id", typeSubsController.delete);
router.delete("/api/typesubs", typeSubsController.deleteAll);

//staff
router.post('/api/staff', staffController.create)
router.get('/api/staff', staffController.findAll)
router.get("/api/staff/:id", staffController.findOne);
router.put("/api/staff/:id", staffController.update);
router.delete("/api/staff/:id", staffController.delete);
router.delete("/api/staff", staffController.deleteAll);
router.get('/api/count/staff', staffController.getCount)


//settings
router.get("/api/syssettings", settingsController.findSystemSettings);
router.put("/api/edit/systemsettings/:id", settingsController.updateSystemSettings);
router.get("/api/restore/syssettings/:id", settingsController.restoreSystemSettings);
router.get("/api/dashboardsettings", settingsController.findDashboardSettings);
router.put("/api/edit/dashboardsettings/:id", settingsController.updateDashboardSettings);
router.get("/api/restore/dashboard/:id", settingsController.restoreDashboardSettings);
router.get("/api/emailtemplatesettings", settingsController.findEmailTemplateSettings);
router.get("/api/emailsettings", settingsController.findEmailSettings);
router.put("/api/edit/emailsettings/:id", settingsController.updateEmailSettings);
router.get("/api/footersettings", settingsController.findFooterSettings);
router.put("/api/edit/footersettings/:id", settingsController.updateFooterSettings);
router.get("/api/restore/footer/:id", settingsController.restoreFooterSettings);
router.get("/api/headersettings", settingsController.findHeaderSettings);
router.put("/api/edit/headersettings/:id", settingsController.updateHeaderSettings);
router.get("/api/restore/header/:id", settingsController.restoreHeaderSettings);
router.get("/api/localisationsettings", settingsController.findLocalisationSettings);
router.put("/api/edit/localisationsettings/:id", settingsController.updateLocalisationSettings);
router.get("/api/notificationsettings", settingsController.findNotificationSettings);
router.put("/api/edit/notificationsettings/:id", settingsController.updateNotificationsSettings);

router.get("/api/count/all", typeSubsController.findAllNumber);
router.get("/api/count/gold", typeSubsController.findGold);
router.get("/api/count/premium", typeSubsController.findPremium);
router.get("/api/count/silver", typeSubsController.findSilver);
router.get("/api/analytics/category", typeSubsController.findSubscriptionByCategory);





router.get("/api/count/staff/all", staffController.findAllNumber);
router.get("/api/count/staff/workout", staffController.findWorkout);
router.get("/api/count/staff/yoga", staffController.findYoga);
router.get("/api/count/staff/fitness", staffController.findFitness);
router.get("/api/analytics/staff/role", staffController.findStaffByRole);


router.get("/api/count/expense/all", expenseController.findAllNumber);
router.get("/api/count/expense/today", expenseController.findToday);
router.get("/api/count/expense/week", expenseController.findWeek);
router.get("/api/count/expense/month", expenseController.findMonth);


router.get("/api/count/income/all", revenueController.findAllNumber);
router.get("/api/count/income/today", revenueController.findToday);
router.get("/api/count/income/week", revenueController.findWeek);
router.get("/api/count/income/month", revenueController.findMonth);
router.get("/api/count/income/incomebydate", revenueController.getIncomeByDate);

router.get("/api/count/event/all", eventController.findAllNumber);
router.get("/api/count/event/today", eventController.findToday);
router.get("/api/count/event/week", eventController.findWeek);
router.get("/api/count/event/month", eventController.findMonth);
router.get("/api/count/event/eventbydate", eventController.findEventByDate);

router.get("/api/count/member/all", memberController.findAllNumber);
router.get("/api/count/member/today", memberController.findToday);
router.get("/api/count/member/week", memberController.findWeek);
router.get("/api/count/member/month", memberController.findMonth);
router.get("/api/count/member/memberbydate", memberController.findMemberDate);


router.get("/api/count/attendance/all", attendanceController.findAllNumber);
router.get("/api/count/attendance/today", attendanceController.findToday);

router.get("/api/virtual-coaching", virtualCoachingController.findAll);
router.get("/api/virtual-coaching/:id", virtualCoachingController.findOne);
router.post("/api/virtual-coaching", virtualCoachingController.create);
router.put("/api/virtual-coaching/:id", virtualCoachingController.update);
router.delete("/api/virtual-coaching/:id", virtualCoachingController.delete);
router.delete("/api/virtual-coaching", virtualCoachingController.deleteAll);
router.get("/api/trainers", trainerController.findAll);
router.get("/api/trainers/:id", trainerController.findOne);
router.post("/api/trainers", trainerController.create);
router.put("/api/trainers/:id", trainerController.update);
router.delete("/api/trainers/:id", trainerController.delete);
router.delete("/api/trainers", trainerController.deleteAll);
router.get("/api/stores", storeController.findAll);
router.get("/api/stores/:id", storeController.findOne);
router.post("/api/stores", storeController.create);
router.put("/api/stores/:id", storeController.update);
router.delete("/api/stores/:id", storeController.delete);
router.delete("/api/stores", storeController.deleteAll);
router.get("/api/smart-lockers", smartLockerController.findAll);
router.get("/api/smart-lockers/:id", smartLockerController.findOne);
router.post("/api/smart-lockers", smartLockerController.create);
router.put("/api/smart-lockers/:id", smartLockerController.update);
router.delete("/api/smart-lockers/:id", smartLockerController.delete);
router.delete("/api/smart-lockers", smartLockerController.deleteAll);
router.get("/api/recoveries", recoveryController.findAll);
router.get("/api/recoveries/:id", recoveryController.findOne);
router.post("/api/recoveries", recoveryController.create);
router.put("/api/recoveries/:id", recoveryController.update);
router.delete("/api/recoveries/:id", recoveryController.delete);
router.delete("/api/recoveries", recoveryController.deleteAll);
router.get("/api/programs", programController.findAll);
router.get("/api/programs/:id", programController.findOne);
router.post("/api/programs", programController.create);
router.put("/api/programs/:id", programController.update);
router.delete("/api/programs/:id", programController.delete);
router.delete("/api/programs", programController.deleteAll);
router.get("/api/ondemand-trainings", onDemandTrainingController.findAll);
router.get("/api/ondemand-trainings/:id", onDemandTrainingController.findOne);
router.post("/api/ondemand-trainings", onDemandTrainingController.create);
router.put("/api/ondemand-trainings/:id", onDemandTrainingController.update);
router.delete("/api/ondemand-trainings/:id", onDemandTrainingController.delete);
router.delete("/api/ondemand-trainings", onDemandTrainingController.deleteAll);
router.get("/api/nutrition-plans", nutritionPlanController.findAll);
router.get("/api/nutrition-plans/:id", nutritionPlanController.findOne);
router.post("/api/nutrition-plans", nutritionPlanController.create);
router.put("/api/nutrition-plans/:id", nutritionPlanController.update);
router.delete("/api/nutrition-plans/:id", nutritionPlanController.delete);
router.delete("/api/nutrition-plans", nutritionPlanController.deleteAll);

module.exports = router;






