/* {
    "id": 901,
    "campaignName": "Spring Fitness Challenge",
    "targetAudience": {
      "ageGroup": "18-35",
      "interest": ["Weight Loss", "Strength Training"],
      "membershipStatus": "Active & Expired"
    },
    "campaignType": "Email + Push Notification",
    "messages": {
      "email": "Join our Spring Challenge & get 20% off on personal training!",
      "pushNotification": "🔥 Ready to transform? Sign up for our challenge now!"
    },
    "performanceMetrics": {
      "openRate": "42%",
      "clickThroughRate": "18%",
      "conversionRate": "7%",
      "aiAnalysis": "Increase personalization to boost engagement."
    }
  } */
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = require("../db/init.sequelize.js");
    
    const MarketingCampaign = sequelize.define('MarketingCampaign', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      campaignName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      targetAudience: {
        type: DataTypes.JSON,
        allowNull: false
      },
      campaignType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      messages: {
        type: DataTypes.JSON,
        allowNull: false
      },
      performanceMetrics: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      tableName: 'marketing_campaigns',
      timestamps: true
    });
    
    module.exports = MarketingCampaign;


const campaigns = [
  {
    campaignName: "Summer Fitness Promo",
    targetAudience: { ageRange: "18-35", interests: ["Fitness", "Health", "Sports"], location: "USA" },
    campaignType: "Email Marketing",
    messages: [
      { subject: "Get Fit This Summer!", body: "Join our gym today and get 20% off on all memberships this summer!" },
      { subject: "Limited Time Offer!", body: "Sign up for a gym membership before June 30th and enjoy free personal training for a month!" }
    ],
    performanceMetrics: { clicks: 1200, opens: 800, conversions: 250 }
  },
  {
    campaignName: "Holiday Fitness Specials",
    targetAudience: { ageRange: "25-45", interests: ["Yoga", "Pilates", "Strength Training"], location: "UK" },
    campaignType: "Social Media Marketing",
    messages: [
      { subject: "Get Ready for the Holidays with Our Fitness Plans", body: "Our special holiday memberships are here! Stay fit during the festive season." },
      { subject: "Sign up and Save", body: "Get 15% off all memberships when you sign up this December!" }
    ],
    performanceMetrics: { likes: 1500, shares: 400, conversions: 180 }
  },
  {
    campaignName: "Back to School Fitness Drive",
    targetAudience: { ageRange: "16-25", interests: ["Weightlifting", "Fitness Challenges", "Bodybuilding"], location: "Canada" },
    campaignType: "Influencer Marketing",
    messages: [
      { subject: "Start Your Semester Strong", body: "Take advantage of our student discount! Join now and get 10% off your first month." },
      { subject: "Level Up Your Fitness", body: "Sign up and receive a free fitness assessment!" }
    ],
    performanceMetrics: { impressions: 10000, clicks: 2000, signUps: 500 }
  },
  {
    campaignName: "Winter Wellness Campaign",
    targetAudience: { ageRange: "30-50", interests: ["Wellness", "Cardio", "Mindfulness"], location: "Australia" },
    campaignType: "Paid Ads",
    messages: [
      { subject: "Stay Active This Winter", body: "Join our gym for a warm and cozy winter workout experience! Free first class for new members." },
      { subject: "Your Winter Fitness Starts Here", body: "Get 25% off your first 3 months when you sign up in the next 5 days!" }
    ],
    performanceMetrics: { impressions: 5000, clicks: 1000, conversions: 300 }
  },
  {
    campaignName: "Spring Fitness Reboot",
    targetAudience: { ageRange: "20-40", interests: ["CrossFit", "HIIT", "Outdoor Workouts"], location: "New Zealand" },
    campaignType: "Referral Program",
    messages: [
      { subject: "Spring Into Fitness", body: "Refer a friend and get one month of free membership when they sign up!" },
      { subject: "Kickstart Your Spring Fitness Journey", body: "Join now for access to exclusive spring fitness challenges!" }
    ],
    performanceMetrics: { referrals: 150, signUps: 350, engagementRate: 0.75 }
  }
];

async function insertMarketingCampaigns() {
  try {
    const timestamp = new Date().toISOString();

    const campaignRecords = campaigns.map(campaign => ({
      ...campaign,
      createdAt: timestamp,
      updatedAt: timestamp
    }));

    await MarketingCampaign.bulkCreate(campaignRecords);
    console.log("✅ Marketing campaigns added successfully!");
  } catch (error) {
    console.error("❌ Error inserting marketing campaigns:", error);
  }
}

insertMarketingCampaigns();
