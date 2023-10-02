const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("apice", "Mateus", "Mateus0312", {
    dialect: "mysql",
    host: "localhost",
    database: "apice", // Add this line to specify the database
});

module.exports = sequelize;
