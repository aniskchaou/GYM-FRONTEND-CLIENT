/* 
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Product = sequelize.define('product', {
    name: Sequelize.STRING,
    quantity: Sequelize.STRING,
    price:Sequelize.STRING
}); */
/* {
    "productId": 3001,
    "name": "Whey Protein - Vanilla",
    "category": "Supplements",
    "price": 49.99,
    "stockQuantity": 150,
    "supplier": "ProteinX Inc.",
    "expiryDate": "2025-12-01",
    "rating": 4.8,
    "createdAt": "2023-04-10",
    "updatedAt": "2024-02-25"
  }
   */
  const { Sequelize, DataTypes } = require('sequelize');
  const sequelize = require("../db/init.sequelize.js");
  
  const Product = sequelize.define('Product', {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    supplier: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expiryDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
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
    tableName: 'products',
    timestamps: true
  });
  
module.exports = Product;


(async () => {
  try {
    await Product.bulkCreate([
      {
        name: 'Whey Protein',
        category: 'Supplement',
        price: 49.99,
        stockQuantity: 100,
        supplier: 'Optimum Nutrition',
        expiryDate: '2026-01-01',
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yoga Mat',
        category: 'Equipment',
        price: 25.00,
        stockQuantity: 50,
        supplier: 'Reebok',
        expiryDate: '2030-01-01',
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BCAA Powder',
        category: 'Supplement',
        price: 29.99,
        stockQuantity: 80,
        supplier: 'MuscleTech',
        expiryDate: '2025-12-15',
        rating: 4.3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Resistance Bands Set',
        category: 'Equipment',
        price: 35.00,
        stockQuantity: 60,
        supplier: 'FitGear',
        expiryDate: '2030-01-01',
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Creatine Monohydrate',
        category: 'Supplement',
        price: 19.99,
        stockQuantity: 90,
        supplier: 'MyProtein',
        expiryDate: '2026-06-01',
        rating: 4.4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gym Gloves',
        category: 'Gear',
        price: 15.00,
        stockQuantity: 70,
        supplier: 'Nike',
        expiryDate: '2030-01-01',
        rating: 4.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Protein Bar - Chocolate',
        category: 'Snack',
        price: 2.99,
        stockQuantity: 200,
        supplier: 'Quest',
        expiryDate: '2025-08-10',
        rating: 4.1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Foam Roller',
        category: 'Recovery',
        price: 22.50,
        stockQuantity: 40,
        supplier: 'TriggerPoint',
        expiryDate: '2030-01-01',
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pre-Workout Drink',
        category: 'Supplement',
        price: 34.99,
        stockQuantity: 75,
        supplier: 'C4',
        expiryDate: '2026-02-20',
        rating: 4.3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gym Towel',
        category: 'Gear',
        price: 10.00,
        stockQuantity: 150,
        supplier: 'Adidas',
        expiryDate: '2030-01-01',
        rating: 4.0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    console.log('Products inserted successfully.');
  } catch (error) {
    console.error('Error inserting products:', error);
  }
})();
