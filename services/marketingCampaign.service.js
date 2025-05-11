const MarketingCampaign = require("../models/MarketingCampaign");

// Get all campaigns
exports.findAllCampaigns = (res) => {
  MarketingCampaign.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving campaigns."
      });
    });
};

// Get a single campaign by ID
exports.findCampaignById = (id, res) => {
  MarketingCampaign.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Campaign not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving campaign with id=" + id
      });
    });
};

// Create a new campaign
exports.createCampaign = (campaignData, res) => {
  MarketingCampaign.create(campaignData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the campaign."
      });
    });
};

// Update a campaign by ID
exports.updateCampaign = (id, req, res) => {
  MarketingCampaign.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Campaign was updated successfully." });
      } else {
        res.send({
          message: `Cannot update campaign with id=${id}. Maybe it was not found or request is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating campaign with id=" + id
      });
    });
};

// Delete a campaign by ID
exports.deleteCampaign = (id, res) => {
  MarketingCampaign.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Campaign was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete campaign with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete campaign with id=" + id
      });
    });
};
