var sequelize = require("../db/init.sequelize.js");
// var Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

/* var TypeSub = sequelize.define('type_subs', {
      member: Sequelize.STRING,
        category: Sequelize.STRING,
        period: Sequelize.STRING,
        limit: Sequelize.STRING,
        amount: Sequelize.STRING,
        description: Sequelize.STRING,
        fee: Sequelize.STRING,
        time_payment: Sequelize.STRING
});


module.exports = TypeSub;
 */
/* {
  "id": 201,
  "name": "Platinum Membership",
  "price": 149.99,
  "durationMonths": 12,
  "features": [
    "24/7 Gym Access",
    "Unlimited Group Classes",
    "Personal Training (4 sessions/month)",
    "Access to Sauna & Pool",
    "Wearable Device Integration"
  ],
  "aiRecommendation": [
    {
      "memberId": 1,
      "reason": "User prefers premium services with extended benefits."
    },
    {
      "memberId": 2,
      "reason": "Based on workout frequency, Platinum is a better fit."
    }
  ],
  "discounts": {
    "studentDiscount": 10,
    "annualDiscount": 15,
    "referralBonus": "1 free month"
  }
} */
  
  const SubscriptionType = sequelize.define('SubscriptionType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    durationMonths: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    features: {
      type: DataTypes.JSON,
      allowNull: false
    },
    aiRecommendation: {
      type: DataTypes.JSON,
      allowNull: false
    },
    discounts: {
      type: DataTypes.JSON,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true // Make it optional if needed
    },
    period: {
      type: DataTypes.STRING,
      allowNull: true
    },
    limit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fee: {
      type: DataTypes.STRING,
      allowNull: true
    },
    time_payment: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'subscription_types',
    timestamps: true
  });
  module.exports = SubscriptionType;

  const subscriptions = [
    {
      name: "Basic",
      price: 29.99,
      durationMonths: 1,
      features: { gymAccess: true, classes: false, personalTrainer: false },
      aiRecommendation: { recommendedFor: "Beginners", reason: "Affordable entry-level plan" },
      discounts: { seasonal: 5, referral: 10 },
      category: "Fitness",
      period: "Monthly",
      limit: "1 session/week",
      amount: "29.99",
      description: "Basic membership for beginners with limited access",
      fee: "No additional fee",
      time_payment: "Monthly"
    },
    {
      name: "Standard",
      price: 49.99,
      durationMonths: 3,
      features: { gymAccess: true, classes: true, personalTrainer: false },
      aiRecommendation: { recommendedFor: "Regular users", reason: "Includes group classes" },
      discounts: { seasonal: 10, referral: 15 },
      category: "Fitness",
      period: "Quarterly",
      limit: "2 sessions/week",
      amount: "49.99",
      description: "Standard membership with group classes access",
      fee: "No additional fee",
      time_payment: "Quarterly"
    },
    {
      name: "Premium",
      price: 79.99,
      durationMonths: 6,
      features: { gymAccess: true, classes: true, personalTrainer: true },
      aiRecommendation: { recommendedFor: "Serious fitness enthusiasts", reason: "Includes personal trainer access" },
      discounts: { seasonal: 15, referral: 20 },
      category: "Fitness",
      period: "Semi-Annual",
      limit: "3 sessions/week",
      amount: "79.99",
      description: "Premium membership with personal trainer access",
      fee: "No additional fee",
      time_payment: "Semi-Annual"
    },
    {
      name: "Annual Membership",
      price: 149.99,
      durationMonths: 12,
      features: { gymAccess: true, classes: true, personalTrainer: true, nutritionPlan: true },
      aiRecommendation: { recommendedFor: "Long-term commitment", reason: "Best value for year-round fitness" },
      discounts: { seasonal: 20, referral: 25 },
      category: "Fitness",
      period: "Annually",
      limit: "Unlimited sessions",
      amount: "149.99",
      description: "Annual membership with full access to all features",
      fee: "No additional fee",
      time_payment: "Annually"
    },
    {
      name: "Student Plan",
      price: 19.99,
      durationMonths: 1,
      features: { gymAccess: true, classes: true, personalTrainer: false },
      aiRecommendation: { recommendedFor: "Students", reason: "Budget-friendly with access to group classes" },
      discounts: { studentID: 10, referral: 5 },
      category: "Fitness",
      period: "Monthly",
      limit: "1 session/week",
      amount: "19.99",
      description: "Special plan for students with access to gym and classes",
      fee: "No additional fee",
      time_payment: "Monthly"
    },
    {
      name: "Senior Citizen Plan",
      price: 24.99,
      durationMonths: 3,
      features: { gymAccess: true, classes: true, wellnessWorkshops: true },
      aiRecommendation: { recommendedFor: "Seniors", reason: "Includes wellness workshops for seniors" },
      discounts: { age65Plus: 15, referral: 10 },
      category: "Fitness",
      period: "Quarterly",
      limit: "2 sessions/week",
      amount: "24.99",
      description: "Senior citizen plan with gym, classes, and wellness workshops",
      fee: "No additional fee",
      time_payment: "Quarterly"
    },
    {
      name: "Family Pack",
      price: 129.99,
      durationMonths: 6,
      features: { gymAccess: true, classes: true, familySessions: true },
      aiRecommendation: { recommendedFor: "Families", reason: "Allows family access to gym facilities" },
      discounts: { familyDiscount: 20, referral: 25 },
      category: "Family",
      period: "Semi-Annual",
      limit: "Unlimited sessions",
      amount: "129.99",
      description: "Family pack with unlimited gym access and group classes",
      fee: "No additional fee",
      time_payment: "Semi-Annual"
    },
    {
      name: "Corporate Plan",
      price: 99.99,
      durationMonths: 6,
      features: { gymAccess: true, classes: true, corporateWellness: true },
      aiRecommendation: { recommendedFor: "Corporate employees", reason: "Designed for workplace fitness programs" },
      discounts: { corporateBulk: 30, referral: 20 },
      category: "Corporate",
      period: "Semi-Annual",
      limit: "Unlimited sessions",
      amount: "99.99",
      description: "Corporate wellness plan for employee fitness programs",
      fee: "No additional fee",
      time_payment: "Semi-Annual"
    },
    {
      name: "Weekend Warrior",
      price: 39.99,
      durationMonths: 3,
      features: { gymAccess: "Weekends Only", classes: false, personalTrainer: false },
      aiRecommendation: { recommendedFor: "Weekend users", reason: "Best for people who work out on weekends only" },
      discounts: { seasonal: 10, referral: 5 },
      category: "Fitness",
      period: "Quarterly",
      limit: "Weekends only",
      amount: "39.99",
      description: "Weekend access to gym with no classes or personal trainer",
      fee: "No additional fee",
      time_payment: "Quarterly"
    },
    {
      name: "Elite Membership",
      price: 199.99,
      durationMonths: 12,
      features: { gymAccess: true, classes: true, personalTrainer: true, spaAccess: true, nutritionPlan: true },
      aiRecommendation: { recommendedFor: "High-end users", reason: "Includes all premium features plus spa access" },
      discounts: { loyalty: 30, referral: 25 },
      category: "Luxury",
      period: "Annually",
      limit: "Unlimited sessions",
      amount: "199.99",
      description: "High-end membership with spa access and all premium features",
      fee: "No additional fee",
      time_payment: "Annually"
    }
  ];
  

async function insertSubscriptions() {
  try {
    const timestamp = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD

    const subscriptionsWithTimestamps = subscriptions.map(sub => ({
      ...sub,
      createdAt: timestamp,
      updatedAt: timestamp
    }));

    await SubscriptionType.bulkCreate(subscriptionsWithTimestamps);
    console.log("✅ 10 subscription types added successfully!");
  } catch (error) {
    console.error("❌ Error inserting subscription types:", error);
  }
}

insertSubscriptions();
