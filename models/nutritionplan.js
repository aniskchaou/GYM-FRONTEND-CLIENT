/* {
    "id": 7,
    "planId": 401,
    "memberId": 101,
    "goal": "Muscle Gain",
    "currentWeight": 75,
    "targetWeight": 80,
    "nutritionPlan": {
      "breakfast": "Oatmeal + Protein Shake",
      "lunch": "Grilled Chicken + Brown Rice",
      "dinner": "Salmon + Steamed Vegetables",
      "caloricIntake": 2800,
      "macros": {
        "protein": "40%",
        "carbs": "40%",
        "fats": "20%"
      }
    },
    "aiRecommendations": [
      "Increase protein intake by 10%",
      "Hydrate more during workouts"
    ],
    "healthMetrics": {
      "bodyFatPercentage": "15%",
      "hydrationLevel": "Adequate",
      "lastHealthCheckup": "2024-02-20"
    }
  } */
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = require("../db/init.sequelize.js");
    
    const NutritionPlan = sequelize.define('NutritionPlan', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      planId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      goal: {
        type: DataTypes.STRING,
        allowNull: false
      },
      currentWeight: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      targetWeight: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      nutritionPlan: {
        type: DataTypes.JSON,
        allowNull: false
      },
      aiRecommendations: {
        type: DataTypes.JSON,
        allowNull: false
      },
      healthMetrics: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'nutrition_plans',
      timestamps: true
    });
    
    module.exports = NutritionPlan;

    const nutritionPlans = [
      {
        planId: 101,
        memberId: 1,
        goal: "Weight Loss",
        currentWeight: 85.0,
        targetWeight: 75.0,
        nutritionPlan: { meals: ["Oatmeal", "Grilled Chicken", "Salmon Salad"], caloriesPerDay: 1800 },
        aiRecommendations: { proteinIntake: "Increase by 10g", hydration: "Drink 3L water daily" },
        healthMetrics: { BMI: 28, bodyFatPercentage: 25 }
      },
      {
        planId: 102,
        memberId: 2,
        goal: "Muscle Gain",
        currentWeight: 70.0,
        targetWeight: 80.0,
        nutritionPlan: { meals: ["Eggs", "Steak", "Brown Rice"], caloriesPerDay: 3000 },
        aiRecommendations: { carbLoad: "Increase by 15%", supplements: "Consider creatine" },
        healthMetrics: { BMI: 24, bodyFatPercentage: 18 }
      },
      {
        planId: 103,
        memberId: 3,
        goal: "Endurance Improvement",
        currentWeight: 68.0,
        targetWeight: 68.0,
        nutritionPlan: { meals: ["Banana", "Quinoa", "Grilled Fish"], caloriesPerDay: 2500 },
        aiRecommendations: { hydration: "Increase electrolyte intake", carbs: "Focus on complex carbs" },
        healthMetrics: { BMI: 22, bodyFatPercentage: 16 }
      },
      {
        planId: 104,
        memberId: 4,
        goal: "Fat Reduction",
        currentWeight: 90.0,
        targetWeight: 80.0,
        nutritionPlan: { meals: ["Greek Yogurt", "Chicken Breast", "Broccoli"], caloriesPerDay: 2000 },
        aiRecommendations: { sugarIntake: "Reduce sugar intake", fiber: "Increase fiber consumption" },
        healthMetrics: { BMI: 30, bodyFatPercentage: 30 }
      },
      {
        planId: 105,
        memberId: 5,
        goal: "Weight Maintenance",
        currentWeight: 75.0,
        targetWeight: 75.0,
        nutritionPlan: { meals: ["Whole Wheat Bread", "Lentil Soup", "Baked Chicken"], caloriesPerDay: 2200 },
        aiRecommendations: { balance: "Maintain macronutrient balance", portionControl: "Avoid overeating" },
        healthMetrics: { BMI: 25, bodyFatPercentage: 20 }
      },
      {
        planId: 106,
        memberId: 6,
        goal: "Muscle Toning",
        currentWeight: 65.0,
        targetWeight: 65.0,
        nutritionPlan: { meals: ["Smoothies", "Grilled Fish", "Vegetable Stir Fry"], caloriesPerDay: 2300 },
        aiRecommendations: { protein: "Ensure 1.2g protein per kg body weight", hydration: "Drink 2.5L daily" },
        healthMetrics: { BMI: 23, bodyFatPercentage: 19 }
      },
      {
        planId: 107,
        memberId: 7,
        goal: "Bulk Up",
        currentWeight: 78.0,
        targetWeight: 88.0,
        nutritionPlan: { meals: ["Protein Shake", "Steak", "Sweet Potatoes"], caloriesPerDay: 3500 },
        aiRecommendations: { fats: "Increase healthy fat intake", protein: "Increase lean protein sources" },
        healthMetrics: { BMI: 27, bodyFatPercentage: 22 }
      },
      {
        planId: 108,
        memberId: 8,
        goal: "Improve Athletic Performance",
        currentWeight: 72.0,
        targetWeight: 74.0,
        nutritionPlan: { meals: ["Avocado Toast", "Tuna Salad", "Grilled Chicken"], caloriesPerDay: 2800 },
        aiRecommendations: { recovery: "Improve post-workout nutrition", fats: "Increase omega-3 intake" },
        healthMetrics: { BMI: 24, bodyFatPercentage: 18 }
      },
      {
        planId: 109,
        memberId: 9,
        goal: "Fat Loss & Lean Muscle",
        currentWeight: 82.0,
        targetWeight: 75.0,
        nutritionPlan: { meals: ["Egg Whites", "Brown Rice", "Spinach"], caloriesPerDay: 1900 },
        aiRecommendations: { mealFrequency: "Eat smaller meals every 3 hours", cardio: "Increase HIIT workouts" },
        healthMetrics: { BMI: 28, bodyFatPercentage: 27 }
      },
      {
        planId: 110,
        memberId: 10,
        goal: "Healthy Lifestyle",
        currentWeight: 70.0,
        targetWeight: 70.0,
        nutritionPlan: { meals: ["Oats", "Lean Turkey", "Grilled Vegetables"], caloriesPerDay: 2100 },
        aiRecommendations: { variety: "Ensure a variety of nutrients", timing: "Eat dinner 3 hours before sleep" },
        healthMetrics: { BMI: 23, bodyFatPercentage: 18 }
      }
    ];
    
    async function insertNutritionPlans() {
      try {
        const timestamp = new Date().toISOString();
    
        const nutritionRecords = nutritionPlans.map(plan => ({
          ...plan,
          createdAt: timestamp,
          updatedAt: timestamp
        }));
    
        await NutritionPlan.bulkCreate(nutritionRecords);
        console.log("✅ 10 nutrition plans added successfully!");
      } catch (error) {
        console.error("❌ Error inserting nutrition plans:", error);
      }
    }
    
    insertNutritionPlans();