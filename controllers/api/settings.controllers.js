    const {restoreDashboardSettings,restoreHeaderSettings,restoreFooterSettings,restoreSystemSettings,updateSystemSettings, updateNotificationsSettings,updateLocalisationSettings,updateHeaderSettings,updateFooterSettings,updateEmailSettings,updateDashboardSettings,findNotificationSettingsById,findLocalisationSettingsById,findHeaderSettingsById,findFooterSettingsById,findEmailSettingsById,findEmailTemplateSettingsById,findDashboardSettingsById,findSystemSettingsById } = require("../../services/settings.services");
const fs = require('fs');


exports.restoreSystemSettings = (req, res) => {
var rawdata = fs.readFileSync('db/settings/system.json');
var student = JSON.parse(rawdata);
  const id = req.params.id;
  console.log(student)
    restoreSystemSettings(id, student, res)
};

exports.restoreFooterSettings = (req, res) => {
var rawdata = fs.readFileSync('db/settings/footer.json');
var student = JSON.parse(rawdata);
  const id = req.params.id;
  console.log(student)
    restoreFooterSettings(id, student, res)
};

exports.restoreHeaderSettings = (req, res) => {
var rawdata = fs.readFileSync('db/settings/header.json');
var student = JSON.parse(rawdata);
  const id = req.params.id;
  console.log(student)
    restoreHeaderSettings(id, student, res)
};

exports.restoreDashboardSettings = (req, res) => {
var rawdata = fs.readFileSync('db/settings/dashboard.json');
var student = JSON.parse(rawdata);
  const id = req.params.id;
  console.log(student)
    restoreDashboardSettings(id, student, res)
};

exports.findSystemSettings = (req, res) => {
findSystemSettingsById(res)
};

exports.findDashboardSettings = (req, res) => {
findDashboardSettingsById(res)
};

exports.findEmailTemplateSettings = (req, res) => {
findEmailTemplateSettingsById(res)
};

exports.findEmailSettings = (req, res) => {
findEmailSettingsById(res)
 };

exports.findFooterSettings = (req, res) => {
 findFooterSettingsById(res)
};

 exports.findHeaderSettings = (req, res) => {
   findHeaderSettingsById(res)
 };

exports.findLocalisationSettings = (req, res) => {
    findLocalisationSettingsById(res)
};

exports.findNotificationSettings = (req, res) => {
    findNotificationSettingsById(res)
};


exports.updateFooterSettings = (req, res) => {
    const id = req.params.id;
    updateFooterSettings(id, req, res)
};

exports.updateNotificationsSettings = (req, res) => {
    const id = req.params.id;
    updateNotificationsSettings(id, req, res)
};

exports.updateHeaderSettings = (req, res) => {
    const id = req.params.id;
    updateHeaderSettings(id, req, res)
};

exports.updateDashboardSettings = (req, res) => {
    const id = req.params.id;
    updateDashboardSettings(id, req, res)
};


exports.updateLocalisationSettings = (req, res) => {
  console.log(req.body)
    const id = req.params.id;
    updateLocalisationSettings(id, req, res)
};

exports.updateSystemSettings = (req, res) => {
console.log(req.body)
    const id = req.params.id;
    updateSystemSettings(id, req, res)
};

exports.updateEmailSettings = (req, res) => {
    const id = req.params.id;
    updateEmailSettings(id, req, res)
};