
const Expense = require("../models/expense.models");

exports.findAllExpenses = (res) => {

    Expense.findAll()
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

exports.createExpense = (expense,res) => {
    Expense.create(expense)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Expense."
            });
        });
}

exports.findExpenseById = (id,res) => {
    Expense.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Expense with id=" + id
            });
        });
}

exports.deleteExpenseById = (id, res) => {
    Expense.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Expense was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Expense with id=${id}. Maybe Expense was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Expense with id=" + id
            });
        });
}

exports.updateExpense = (id, req,res) => {
    Expense.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Expense was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Expense with id=${id}. Maybe Expense was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Expense with id=" + id
            });
        });
}

exports.deleteAllExpenses = () => {
    Expense.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Expense were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}

exports.getExpenseByDate= (res) => {

  Expense.findAll()
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
                label: 'expenses ($)' ,
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
