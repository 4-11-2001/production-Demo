const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../SqlConnection/SqlConnection');
const UserModel = require('./UserModel')

const RoutineCheckupModel = sequelize.define(
    "routine_checkup",
    {
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references: {
                model: UserModel,
                key: 'id',
            },
        },
        BloodPressure_Systolic: {
            type: DataTypes.STRING,
            allowNull: true, // Make it optional if needed
        },
        BloodPressure_Diastolic: {
            type: DataTypes.STRING,
            allowNull: true, // Make it optional if needed
        },
        BodyTemperature: {
            type: DataTypes.STRING,
            allowNull: false, // Assuming last name is required
        },
        PostPranDialSugar: {
            type: DataTypes.STRING,
            allowNull: false, // Assuming last name is required
        },
        FastingBloodSugar: {
            type: DataTypes.STRING,
            allowNull: false, // Assuming last name is required
        },
        Weight: {
            type: DataTypes.STRING,
            allowNull: false, // Assuming last name is required
        },
        Height: {
            type: DataTypes.STRING,
            allowNull: false, // Assuming last name is required
        },
        
        Date: {
            type: DataTypes.DATE,
            allowNull: false,
        }, 
        Time: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },


       
        createdAt: DataTypes.DATE,
    }
);
RoutineCheckupModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    as: 'UserInfo',
});

UserModel.hasMany(RoutineCheckupModel, {
    foreignKey: 'user_id',
    as: 'UserRoutineCheckupInfo',
});



// Sync the model with the database
sequelize.sync();

module.exports = RoutineCheckupModel;