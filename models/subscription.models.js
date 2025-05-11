const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Subscription = sequelize.define("Subscription", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  durationMonths: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  features: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  aiRecommendation: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  discounts: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  period: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  limit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fee: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time_payment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "subscriptions",
  timestamps: true,
});

module.exports = Subscription;



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
      limit: "10 sessions",
      amount: "29.99",
      description: "Basic gym access with limited features",
      fee: "No extra fee",
      time_payment: "Monthly",
    },
    {
      name: "Premium",
      price: 79.99,
      durationMonths: 6,
      features: { gymAccess: true, classes: true, personalTrainer: true },
      aiRecommendation: { recommendedFor: "Serious fitness enthusiasts", reason: "Includes personal trainer access" },
      discounts: { seasonal: 15, referral: 20 },
      category: "Luxury",
      period: "Half-Yearly",
      limit: "Unlimited",
      amount: "79.99",
      description: "Full access with personal trainer",
      fee: "One-time setup fee $10",
      time_payment: "Every 6 months",
    },
    {
      name: "Annual Membership",
      price: 149.99,
      durationMonths: 12,
      features: { gymAccess: true, classes: true, personalTrainer: true, nutritionPlan: true },
      aiRecommendation: { recommendedFor: "Long-term commitment", reason: "Best value for year-round fitness" },
      discounts: { seasonal: 20, referral: 25 },
      category: "Corporate",
      period: "Yearly",
      limit: "Unlimited",
      amount: "149.99",
      description: "Best for long-term commitment",
      fee: "Annual renewal fee $20",
      time_payment: "Yearly",
    },
  ];
  
  const insertSubscriptions = async () => {
    try {
      await Subscription.bulkCreate(subscriptions);
      console.log("Subscriptions inserted successfully!");
    } catch (error) {
      console.error("Error inserting subscriptions:", error);
    }
  };
  
  insertSubscriptions();