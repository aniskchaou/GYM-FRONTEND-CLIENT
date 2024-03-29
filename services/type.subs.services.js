
const TypeSub = require("../models/type.subs.models");

exports.findAllTypeSubs = (res) => {

    TypeSub.findAll({
        order: [
            ['createdAt', 'DESC']
        ],
    })
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

exports.createTypeSubs = (groupe, res) => {
    TypeSub.create(groupe)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the TypeSub."
            });
        });
}

exports.findTypeSubById = (id) => {
    TypeSub.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving TypeSub with id=" + id
            });
        });
}

exports.deleteTypeSubsById = (id, res) => {
    TypeSub.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "TypeSub was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete TypeSub with id=${id}. Maybe TypeSub was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete TypeSub with id=" + id
            });
        });
}

exports.updateTypeSubs = (id, req, res) => {
    TypeSub.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "TypeSub was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update TypeSub with id=${id}. Maybe TypeSub was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating TypeSub with id=" + id
            });
        });
}

exports.deleteAllTypeSubs = () => {
    TypeSub.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} TypeSub were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}

exports.findAllNumber = (res) => {
    TypeSub.count().then(data => {
        console.log(data)
        res.send({ "all": data })
    })
};
exports.findGold = (res) => {
    TypeSub.count({
        where: [{ "category": 'Gold' }]
    }).then(data => {
        res.send({ "gold": data })

    })
};
exports.findPremium = (res) => {
    TypeSub.count({
        where: [{ "category": 'Premium' }]
    }).then(data => {
        res.send({ "premium": data })

    })
};
exports.findSilver = (res) => {
    TypeSub.count({
        where: [{ "category": 'Silver' }]
    }).then(data => {
        res.send({ "silver": data })

    })
};

exports.findSubscriptionByCategory = (res) => {
    /* categories = []
      TypeSub.count({
          where: [{ "category": 'Gold' }]
      }).then(data => {
  
          categories.push(data)
  
  
      })
  
      TypeSub.count({
          where: [{ "category": 'Premium' }]
      }).then(data => {
  
          categories.push(data)
  
  
      })
  
  
      TypeSub.count({
          where: [{ "category": 'Silver' }]
      }).then(data => {
  
          categories.push(data)
  
      })*/




};