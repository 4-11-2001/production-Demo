const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../SqlConnection/SqlConnection");
const UserModel = require("./UserModel");

const MedicalFormModel = sequelize.define("medical_form", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: UserModel,
      key: "id",
    },
  },
  Purpose: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NameofPhysicianAndThierSpeciality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  MostRecentPhysicalExamination: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  WhatIsYourEstimateOfYourGeneralHealth: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HospitalizationForIllnessOrInjury: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  heartProblemsOrCardiacStentWithinTheLastSixMonths: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  artificialHeartValveRepairedHeartDefect: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  aspirin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  penicilin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  erythromycin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  tetra: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  sul: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  local: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  flu: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  metals: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  latex: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  other: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  pacemakerOrImplantableDefibrillator: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  artificialProthesis: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  rheumaticOrScarletFever: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  highOrLowBloodPressure: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  aStroke: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  anemiaOrOtherBloodDisorder: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  prolongedBleedingDuetoSlightCut: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  emphysemaShortnessOfBreathSarcoidosis: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  tuberculosisMeaslesChickenPox: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  asthma: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  breathingOrSleepProblems: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  kidneyDisease: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  liverDisease: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  anyOther: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
});

MedicalFormModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "UserInfo",
});

UserModel.hasMany(MedicalFormModel, {
  foreignKey: "user_id",
  as: "UserMedicalHistory",
});

// Sync the model with the database
sequelize.sync();

module.exports = MedicalFormModel;
