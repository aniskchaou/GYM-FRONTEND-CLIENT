const { findAll} = require("../services/frontoffice/home.page.services");
exports.getHome = async function (req, res, next) {
    findAll(res)

}

