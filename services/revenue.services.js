
const Revenue = require("../models/revenue.models");

exports.findAllRevenues = (res) => {

    Revenue.findAll()
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

exports.createRevenue = (revenue,res) => {
    Revenue.create(revenue)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Revenue."
            });
        });
}

exports.findRevenueById = (id) => {
    Revenue.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Revenue with id=" + id
            });
        });
}

exports.deleteRevenueById = (id, res) => {
    Revenue.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Revenue was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Revenue with id=${id}. Maybe Revenue was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Revenue with id=" + id
            });
        });
}

exports.updateRevenue = (id, req,res) => {
    Revenue.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Revenue was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Revenue with id=${id}. Maybe Revenue was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Revenue with id=" + id
            });
        });
}

exports.deleteAllRevenues = () => {
    Revenue.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Revenue were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}

exports.getIncomeByDate= (res) => {
console.log("sfgsfgd")
  Revenue.findAll()
        .then(data => {
        var dates=[]
                var amounts=[]
                const monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"
                ];
                data.forEach(function(element) {
                 const d = new Date(element.date)
                 if(element.date!=null&& element.amount!=null)
                 {
                 dates.push( monthNames[d.getMonth()])
                          amounts.push(element.amount )
                 }

                });

          const response = {
            labels:dates,
            datasets: [
              {
                label: 'expenses' ,
                data: amounts,
                borderColor: '#ffa400',
                backgroundColor: '#ffa400',
              }
            ],
          };
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}