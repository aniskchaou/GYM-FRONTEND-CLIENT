const { createNutritionPlan, findAllNutritionPlans, findNutritionPlanById, updateNutritionPlan, deleteNutritionPlanById, deleteAllNutritionPlans } = require("../../services/nutritionPlan.service");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const nutritionPlan = {
        planId: req.body.planId,
        memberId: req.body.memberId,
        goal: req.body.goal,
        currentWeight: req.body.currentWeight,
        targetWeight: req.body.targetWeight,
        nutritionPlan: req.body.nutritionPlan,
        aiRecommendations: req.body.aiRecommendations,
        healthMetrics: req.body.healthMetrics
    };
    createNutritionPlan(nutritionPlan, res);
};

exports.findAll = (req, res) => {
    findAllNutritionPlans(res);
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findNutritionPlanById(id, res);
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateNutritionPlan(id, req, res);
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteNutritionPlanById(id, res);
};

exports.deleteAll = (req, res) => {
    deleteAllNutritionPlans(req, res);
};
