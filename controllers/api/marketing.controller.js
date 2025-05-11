const { createCampaign, findAllCampaigns, findCampaignById, updateCampaign, deleteCampaignById, deleteAllCampaigns } = require("../../services/marketingCampaign.services");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const campaign = {
        campaignName: req.body.campaignName,
        targetAudience: req.body.targetAudience,
        campaignType: req.body.campaignType,
        messages: req.body.messages,
        performanceMetrics: req.body.performanceMetrics
    };
    createCampaign(campaign, res);
};

exports.findAll = (req, res) => {
    findAllCampaigns(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findCampaignById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateCampaign(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteCampaignById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllCampaigns(req, res);
};
