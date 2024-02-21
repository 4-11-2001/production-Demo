const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../SqlConnection/SqlConnection");
const bcrypt = require("bcrypt");

const user = sequelize.define("users", {
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false, // Assuming first name is required
  },
  MiddleName: {
    type: DataTypes.STRING,
    allowNull: true, // Make it optional if needed
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false, // Assuming last name is required
  },
  Mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  EmailOtp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GovIdProof: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GovIdNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  Username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  BloodGroup: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Height: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Weight: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  createdAt: DataTypes.DATE,
});

// Sync the model with the database
sequelize.sync();

user.beforeCreate(async (user) => {
  if (user.Password) {
    const hashedPassword = await bcrypt.hash(user.Password, 10);
    user.Password = hashedPassword;
  }
});

module.exports = user;
