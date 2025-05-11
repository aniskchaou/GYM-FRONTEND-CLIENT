

const rewards = [
  {
    memberId: 1,
    points: 200,
    rewardType: "Free Gym Session",
    description: "Redeem 200 points for a free gym session",
    status: "Active",
    expiryDate: "2025-06-30",
  },
  {
    memberId: 2,
    points: 500,
    rewardType: "One Month Free Membership",
    description: "Redeem 500 points for a free month",
    status: "Active",
    expiryDate: "2025-12-31",
  },
  {
    memberId: 3,
    points: 100,
    rewardType: "Discount on Supplements",
    description: "Use 100 points for 10% off gym supplements",
    status: "Active",
    expiryDate: "2025-04-15",
  },
];

LoyaltyRewards.bulkCreate(rewards)
  .then(() => console.log("Loyalty Rewards inserted!"))
  .catch((error) => console.error("Error inserting rewards:", error));
