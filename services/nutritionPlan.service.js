const NutritionPlan = require("../models/nutritionplan");

// Get all nutrition plans
exports.findAllNutritionPlans = (res) => {
  NutritionPlan.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving nutrition plans."
      });
    });
};

// Get a single plan by ID
exports.findPlanById = (id, res) => {
  NutritionPlan.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Nutrition plan not found with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving nutrition plan with id=" + id
      });
    });
};

// Create a new nutrition plan
exports.createNutritionPlan = (planData, res) => {
  NutritionPlan.create(planData)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the nutrition plan."
      });
    });
};

// Update a nutrition plan by ID
exports.updateNutritionPlan = (id, req, res) => {
  NutritionPlan.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Nutrition plan was updated successfully." });
      } else {
        res.send({
          message: `Cannot update nutrition plan with id=${id}. Maybe it was not found or request is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating nutrition plan with id=" + id
      });
    });
};

// Delete a nutrition plan by ID
exports.deleteNutritionPlan = (id, res) => {
  NutritionPlan.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Nutrition plan was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete nutrition plan with id=${id}. Maybe it was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete nutrition plan with id=" + id
      });
    });
};
