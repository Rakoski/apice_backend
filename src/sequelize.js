const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("apice", "meu-usuario", "minha-senha", {
    dialect: "mysql",
    host: "localhost",
    database: "apice",
});

module.exports = sequelize;
