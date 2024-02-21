require("dotenv").config();
const { Sequelize } = require("sequelize");
const database = process.env.DATABASE;
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT; // Ensure this variable is correctly set

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect, // Make sure this variable is correctly set
});

isConnected = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

isConnected();

module.exports = sequelize;
