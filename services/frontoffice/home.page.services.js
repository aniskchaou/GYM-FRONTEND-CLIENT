
const HomePage = require("../../models/frontoffice/home.page.models.js");

exports.updateFrontOffice = (id, req,res) => {
    HomePage.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Event was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Event with id=" + id
            });
        });
}

exports.findAll = (res) => {

    HomePage.findOne()
        .then(data => {
             console.log(data.dataValues)
             res.render("elements/index", { viewTitle: 'GYM' ,homePage:data.dataValues});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.findOneFrontOffice = (res) => {
HomePage.findOne()
        .then(data => {
             res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });

}