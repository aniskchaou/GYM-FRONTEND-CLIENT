/* {
    "storeId": 8001,
    "name": "Gym Pro Shop",
    "location": "Front Desk",
    "contactEmail": "store@gympro.com",
    "contactPhone": "+1 555 123 4567",
    "workingHours": {
      "mondayToFriday": "8:00 AM - 8:00 PM",
      "saturday": "9:00 AM - 5:00 PM",
      "sunday": "Closed"
    },
    "products": [
      {
        "productId": 9001,
        "name": "Protein Powder - Vanilla",
        "category": "Supplements",
        "brand": "Optimum Nutrition",
        "price": 29.99,
        "currency": "USD",
        "stock": 50,
        "sku": "PROT-VAN-01",
        "weight": "2 lbs",
        "expirationDate": "2025-06-30"
      },
      {
        "productId": 9002,
        "name": "Resistance Bands Set",
        "category": "Equipment",
        "brand": "FitFlex",
        "price": 19.99,
        "currency": "USD",
        "stock": 30,
        "sku": "RES-BND-03",
        "color": "Black/Red",
        "material": "Latex"
      }
    ],
    "status": "Active",
    "createdAt": "2024-03-01T10:00:00",
    "updatedAt": "2024-03-05T12:30:00"
  }
   */

  const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

const Store = sequelize.define('Store', {
  storeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactEmail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactPhone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  workingHours: {
    type: DataTypes.JSON,
    allowNull: false
  },
  products: {
    type: DataTypes.JSON,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'stores',
  timestamps: true
});

module.exports = Store;

const stores = [
  {
    name: "Downtown Gym Store",
    location: "123 Main St, Downtown",
    contactEmail: "downtown@gymsupply.com",
    contactPhone: "555-1001",
    workingHours: { Monday: "8 AM - 8 PM", Saturday: "9 AM - 5 PM", Sunday: "Closed" },
    products: ["Protein Shakes", "Dumbbells", "Yoga Mats"],
    status: "Open"
  },
  {
    name: "Uptown Fitness Mart",
    location: "456 Elm St, Uptown",
    contactEmail: "uptown@gymsupply.com",
    contactPhone: "555-1002",
    workingHours: { Monday: "9 AM - 9 PM", Sunday: "Closed" },
    products: ["Treadmills", "Resistance Bands", "Supplements"],
    status: "Open"
  },
  {
    name: "Westside Gym Pro",
    location: "789 Oak St, Westside",
    contactEmail: "westside@gymsupply.com",
    contactPhone: "555-1003",
    workingHours: { Monday: "7 AM - 10 PM", Sunday: "10 AM - 4 PM" },
    products: ["Kettlebells", "Foam Rollers", "Jump Ropes"],
    status: "Open"
  },
  {
    name: "Eastside Fitness Hub",
    location: "101 Maple St, Eastside",
    contactEmail: "eastside@gymsupply.com",
    contactPhone: "555-1004",
    workingHours: { Monday: "8 AM - 7 PM", Sunday: "Closed" },
    products: ["Fitness Trackers", "Weightlifting Gloves", "Shaker Bottles"],
    status: "Open"
  },
  {
    name: "North Gym Essentials",
    location: "202 Birch St, North City",
    contactEmail: "northcity@gymsupply.com",
    contactPhone: "555-1005",
    workingHours: { Monday: "8 AM - 8 PM", Sunday: "Closed" },
    products: ["Pre-Workout Powder", "Resistance Bands", "Gym Apparel"],
    status: "Open"
  },
  {
    name: "Southside Strength Store",
    location: "303 Pine St, Southside",
    contactEmail: "southside@gymsupply.com",
    contactPhone: "555-1006",
    workingHours: { Monday: "9 AM - 6 PM", Sunday: "Closed" },
    products: ["Barbells", "Lifting Belts", "Supplements"],
    status: "Closed for Renovation"
  },
  {
    name: "Central Gym Depot",
    location: "404 Cedar St, City Center",
    contactEmail: "central@gymsupply.com",
    contactPhone: "555-1007",
    workingHours: { Monday: "7 AM - 9 PM", Sunday: "10 AM - 5 PM" },
    products: ["Smart Scales", "Foam Rollers", "Hydration Packs"],
    status: "Open"
  },
  {
    name: "Elite Training Gear",
    location: "505 Walnut St, Elite District",
    contactEmail: "elite@gymsupply.com",
    contactPhone: "555-1008",
    workingHours: { Monday: "10 AM - 7 PM", Sunday: "Closed" },
    products: ["Battle Ropes", "Medicine Balls", "Compression Sleeves"],
    status: "Open"
  },
  {
    name: "Powerhouse Gym Store",
    location: "606 Spruce St, Power District",
    contactEmail: "powerhouse@gymsupply.com",
    contactPhone: "555-1009",
    workingHours: { Monday: "6 AM - 10 PM", Sunday: "8 AM - 4 PM" },
    products: ["Olympic Weights", "Chalk", "Powerlifting Shoes"],
    status: "Open"
  },
  {
    name: "The Recovery Zone",
    location: "707 Ash St, Wellness Center",
    contactEmail: "recovery@gymsupply.com",
    contactPhone: "555-1010",
    workingHours: { Monday: "10 AM - 6 PM", Sunday: "Closed" },
    products: ["Massage Guns", "Foam Rollers", "CBD Recovery Cream"],
    status: "Open"
  }
];

async function insertStores() {
  try {
    const timestamp = new Date().toISOString();

    const storesWithTimestamps = stores.map(store => ({
      ...store,
      createdAt: timestamp,
      updatedAt: timestamp
    }));

    await Store.bulkCreate(storesWithTimestamps);
    console.log("✅ 10 stores added successfully!");
  } catch (error) {
    console.error("❌ Error inserting stores:", error);
  }
}

insertStores();