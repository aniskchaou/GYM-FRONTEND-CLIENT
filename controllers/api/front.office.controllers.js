const { updateFrontOffice,findOneFrontOffice} = require("../../services/frontoffice/home.page.services");

exports.findOne = (req, res) => {
    findOneFrontOffice(res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateFrontOffice(id, req, res)
};