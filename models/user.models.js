
/* var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var User = sequelize.define('user', {
    name: Sequelize.STRING,
    birthday: Sequelize.DATE,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    telephone: Sequelize.STRING,
    address: Sequelize.STRING,
    role: Sequelize.STRING,
    username: Sequelize.STRING
});

{
    "id": 5001,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "role": "Member",
    "membershipType": "Platinum",
    "loyaltyPoints": 500,
    "createdAt": "2023-06-15",
    "updatedAt": "2024-03-02",
    "status": "Active"
  }
  
module.exports = User; */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db/init.sequelize.js");

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  membershipType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loyaltyPoints: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;

(async () => {
  try {
    await User.bulkCreate([
      {
        username: 'john_doe',
        password: 'password123',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        role: 'admin',
        membershipType: 'premium',
        loyaltyPoints: 100,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'active',
      },
      {
        username: 'jane_smith',
        password: 'password123',
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '2345678901',
        role: 'user',
        membershipType: 'basic',
        loyaltyPoints: 50,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'active',
      },
      {
        username: 'alice_wonder',
        password: 'password123',
        name: 'Alice Wonder',
        email: 'alice@example.com',
        phone: '3456789012',
        role: 'user',
        membershipType: 'premium',
        loyaltyPoints: 200,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'inactive',
      },
      {
        username: 'bob_builder',
        password: 'password123',
        name: 'Bob Builder',
        email: 'bob@example.com',
        phone: '4567890123',
        role: 'user',
        membershipType: 'standard',
        loyaltyPoints: 75,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'active',
      },
      {
        username: 'charlie_brown',
        password: 'password123',
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        phone: '5678901234',
        role: 'user',
        membershipType: 'basic',
        loyaltyPoints: 10,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'inactive',
      },
      {
        username: 'diana_prince',
        password: 'password123',
        name: 'Diana Prince',
        email: 'diana@example.com',
        phone: '6789012345',
        role: 'admin',
        membershipType: 'premium',
        loyaltyPoints: 300,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'active',
      },
      {
        username: 'edward_snow',
        password: 'password123',
        name: 'Edward Snow',
        email: 'edward@example.com',
        phone: '7890123456',
        role: 'user',
        membershipType: 'standard',
        loyaltyPoints: 120,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'active',
      },
      {
        username: 'fiona_sharp',
        password: 'password123',
        name: 'Fiona Sharp',
        email: 'fiona@example.com',
        phone: '8901234567',
        role: 'user',
        membershipType: 'basic',
        loyaltyPoints: 30,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'active',
      },
      {
        username: 'george_white',
        password: 'password123',
        name: 'George White',
        email: 'george@example.com',
        phone: '9012345678',
        role: 'moderator',
        membershipType: 'standard',
        loyaltyPoints: 80,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'inactive',
      },
      {
        username: 'hannah_mint',
        password: 'password123',
        name: 'Hannah Mint',
        email: 'hannah@example.com',
        phone: '0123456789',
        role: 'user',
        membershipType: 'premium',
        loyaltyPoints: 180,
        createdAt: '2025-05-11',
        updatedAt: '2025-05-11',
        status: 'active',
      },
    ]);

    console.log('Users inserted successfully.');
  } catch (error) {
    console.error('Error inserting users:', error);
  }
})();



