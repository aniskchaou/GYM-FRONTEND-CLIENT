
const Member = require("../models/member.models");


exports.getCount=(req, res)=>{
Member.count()
               .then(data=>{
               res.send({'member':data})
               }).catch(err => {
                             res.status(500).send({
                                 message:
                                     err.message || "Some error occurred while retrieving users."
                             });
                         });
}


exports.findAllMembers = (res) => {

    Member.findAll()
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

exports.createMember = (member,res) => {
    Member.create(member)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Member."
            });
        });
}

exports.findMemberById = (id,res) => {
    Member.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Member with id=" + id
            });
        });
}

exports.deleteMemberById = (id, res) => {
    Member.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Member was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Member with id=${id}. Maybe Member was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Member with id=" + id
            });
        });
}

exports.updateMember = (id, req,res) => {
    Member.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Member was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Member with id=${id}. Maybe Member was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Member with id=" + id
            });
        });
}

exports.deleteAllMembers = () => {
    Member.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Member were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}

exports.getMemberByDate= (res) => {

  Member.findAll()
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
                   var dateBirth=new Date(data.date)
                           var age =2022-dateBirth.getFullYear()
                  //dates.push( monthNames[d.getMonth()])
                           amounts.push(age)
                  }

                 });



          const response = {
            labels:[],
            datasets: [
              {
                label: 'members' ,
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