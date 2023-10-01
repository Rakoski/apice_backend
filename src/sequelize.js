const { Sequelize } = require("sequelize");

// Create a Sequelize instance with your database configuration
const sequelize = new Sequelize("apice", "Mateus", "Mateus0312", {
    dialect: "mysql", // Replace with your database dialect
    host: "localhost", // Replace with your database host
});

module.exports = sequelize;
