const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../SqlConnection/SqlConnection');

const OTPModel = sequelize.define(
    "Email_Otp",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          otp: {
            type: DataTypes.STRING,
            allowNull: false,
          },

        createdAt: DataTypes.DATE,
    }
);

// Sync the model with the database
sequelize.sync();

module.exports = OTPModel;