const { findAll } = require("../services/frontoffice/home.page.services");

exports.getHome = async function (req, res, next) {
    findAll(res)
}

exports.signin = async function (req, res, next) {
    res.writeHead(302, {
        'Location': 'http://localhost:3000/'
    });
    res.end();

}
