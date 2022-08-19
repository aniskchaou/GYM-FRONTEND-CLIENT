const SystemSettings = require("../models/settings/system.settings.models");
var DashboardSettings = require("../models/settings/dashboard.settings.models.js")
var EmailSettings = require("../models/settings/email.settings.models.js")
var EmailTemplateSettings = require("../models/settings/email.template.settings.models.js")
var FooterSettings = require("../models/settings/footer.settings.models.js")
var HeaderSettings = require("../models/settings/header.settings.models.js")
var LocalisationSettings = require("../models/settings/localisation.settings.models.js")
var NotificationSettings = require("../models/settings/notification.settings.models.js")
exports.findSystemSettingsById = (res) => {
   SystemSettings.findAll({limit: 1,order: [ [ 'createdAt', 'ASC' ]]})
           .then(data => {
               res.send(data);
           })
           .catch(err => {
               res.status(500).send({
                   message: "Error retrieving Revenue with id=" + id
               });
           });
}

exports.findLocalisationSettingsById = (res) => {
   LocalisationSettings.findAll({limit: 1,order: [ [ 'createdAt', 'ASC' ]]})
           .then(data => {
               res.send(data);
           })
           .catch(err => {
               res.status(500).send({
                   message: "Error retrieving Revenue with id=" + id
               });
           });
}

exports.findNotificationSettingsById = (res) => {
   NotificationSettings.findAll({limit: 1,order: [ [ 'createdAt', 'ASC' ]]})
           .then(data => {
               res.send(data);
           })
           .catch(err => {
               res.status(500).send({
                   message: "Error retrieving Revenue with id=" + id
               });
           });
}

exports.findDashboardSettingsById = (res) => {
   DashboardSettings.findAll({limit: 1,order: [ [ 'createdAt', 'ASC' ]]})
           .then(data => {
               res.send(data);
           })
           .catch(err => {
               res.status(500).send({
                   message: "Error retrieving Revenue with id=" + id
               });
           });
}

exports.findEmailSettingsById = (res) => {
   EmailSettings.findAll({limit: 1,order: [ [ 'createdAt', 'ASC' ]]})
           .then(data => {
               res.send(data);
           })
           .catch(err => {
               res.status(500).send({
                   message: "Error retrieving Revenue with id=" + id
               });
           });
}

exports.findEmailTemplateSettingsById = (res) => {
   EmailTemplateSettings.findAll({limit: 1,order: [ [ 'createdAt', 'ASC' ]]})
           .then(data => {
               res.send(data);
           })
           .catch(err => {
               res.status(500).send({
                   message: "Error retrieving Revenue with id=" + id
               });
           });
}

exports.findFooterSettingsById = (res) => {
   FooterSettings.findAll({limit: 1,order: [ [ 'createdAt', 'ASC' ]]})
           .then(data => {
               res.send(data);
           })
           .catch(err => {
               res.status(500).send({
                   message: "Error retrieving Revenue with id=" + id
               });
           });
}

exports.findHeaderSettingsById = (res) => {
   HeaderSettings.findAll({limit: 1,order: [ [ 'createdAt', 'ASC' ]]})
           .then(data => {
               res.send(data);
           })
           .catch(err => {
               res.status(500).send({
                   message: "Error retrieving Revenue with id=" + id
               });
           });
}

exports.updateDashboardSettings = (id,req,res) => {
     DashboardSettings.update(req.body, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}

exports.restoreSystemSettings = (id,req,res) => {
     SystemSettings.update(req, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}

exports.restoreDashboardSettings = (id,req,res) => {
     DashboardSettings.update(req, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}
exports.restoreFooterSettings = (id,req,res) => {
     FooterSettings.update(req, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}

exports.restoreHeaderSettings = (id,req,res) => {
     HeaderSettings.update(req, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}

exports.updateSystemSettings = (id,req,res) => {
     SystemSettings.update(req.body, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}

exports.updateNotificationsSettings = (id,req,res) => {
    NotificationSettings.update(req.body, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}

exports.updateEmailsSettings = (id,req,res) => {
    EmailSettings.update(req.body, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}

exports.updateHeaderSettings = (id,req,res) => {
    HeaderSettings.update(req.body, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}

exports.updateFooterSettings = (id,req,res) => {
    FooterSettings.update(req.body, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}
exports.updateEmailSettings = (id,req,res) => {

    EmailSettings.update(req.body, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}

exports.updateLocalisationSettings = (id,req,res) => {
 console.log(id)
 console.log(req)
    LocalisationSettings.update(req.body, {
          where: { id: id }
      })
          .then(num => {
              if (num == 1) {
                  res.send({
                      message: "Revenue was updated successfully."
                  });
              } else {
                  res.send({
                      message: 'Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!'
                  });
              }
          })
          .catch(err => {
              res.status(500).send({
                  message: "Error updating Revenue with id=" + id
              });
          });
}