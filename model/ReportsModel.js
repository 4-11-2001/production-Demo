// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../SqlConnection/SqlConnection");
// const UserModel = require("./UserModel");

// const ReportsModel = sequelize.define("reports", {
//   user_id: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//     references: {
//       model: UserModel,
//       key: "id",
//     },
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: true, // Make it optional if needed
//   },
//   uri: {
//     type: DataTypes.STRING,
//     allowNull: true, // Make it optional if needed
//   },
//   type: {
//     type: DataTypes.STRING,
//     allowNull: true, // Make it optional if needed
//   },
//   //   Description: {
//   //     type: DataTypes.STRING,
//   //     allowNull: false, // Assuming last name is required
//   //   },
//   //   Date: {
//   //     type: DataTypes.DATE,
//   //     allowNull: true,
//   //   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },

//   createdAt: DataTypes.DATE,
// });
// ReportsModel.belongsTo(UserModel, {
//   foreignKey: "user_id",
//   as: "UserInfo",
// });

// UserModel.hasMany(ReportsModel, {
//   foreignKey: "user_id",
//   as: "UserDocuments",
// });

// // Sync the model with the database
// sequelize.sync();

// module.exports = ReportsModel;
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../SqlConnection/SqlConnection");
const UserModel = require("./UserModel");

const ReportsModel = sequelize.define("reports", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: UserModel,
      key: "id",
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true, // Make it optional if needed
  },
  uri: {
    type: DataTypes.STRING,
    allowNull: true, // Make it optional if needed
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true, // Make it optional if needed
  },
  pdf: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
});
ReportsModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "UserInfo",
});

UserModel.hasMany(ReportsModel, {
  foreignKey: "user_id",
  as: "UserDocuments",
});

// Sync the model with the database
sequelize.sync();

module.exports = ReportsModel;
