const {
    createVirtualCoaching,
    findAllVirtualCoaching,
    findVirtualCoachingById,
    updateVirtualCoaching,
    deleteVirtualCoachingById,
    deleteAllVirtualCoaching
  } = require("../../services/virtualCoaching.service");
  
  // Create
  exports.create = (req, res) => {
    if (!req.body) {
      return res.status(400).send({ message: "Content can not be empty!" });
    }
  
    const coachingData = {
      memberId: req.body.memberId,
      goal: req.body.goal,
      currentFitnessLevel: req.body.currentFitnessLevel,
      aiGeneratedWorkoutPlan: req.body.aiGeneratedWorkoutPlan,
      aiFeedback: req.body.aiFeedback,
      trainerReview: req.body.trainerReview
    };
  
    createVirtualCoaching(coachingData, res);
  };
  
  // Find All
  exports.findAll = (req, res) => {
    findAllVirtualCoaching(res);
  };
  
  // Find One
  exports.findOne = (req, res) => {
    const id = req.params.id;
    findVirtualCoachingById(id, res);
  };
  
  // Update
  exports.update = (req, res) => {
    const id = req.params.id;
    updateVirtualCoaching(id, req, res);
  };
  
  // Delete One
  exports.delete = (req, res) => {
    const id = req.params.id;
    deleteVirtualCoachingById(id, res);
  };
  
  // Delete All
  exports.deleteAll = (req, res) => {
    deleteAllVirtualCoaching(req, res);
  };
  