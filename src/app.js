const express = require("express");
const app = express();
const Sequelize = require("sequelize");

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_DBNAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: console.log,
    }
);

const Produto = require('./models/produto')(sequelize, Sequelize.DataTypes);

const postsRouter = require('./routes/produtos.router')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", postsRouter)

// pra facilitar o netstat
const porta = 3000;

sequelize
    .sync()
    .then(() => {
        app.listen(porta, () => {
            console.log("Server is running on port", porta);
        });
    })
    .catch((error) => {
        console.error("Error syncing Sequelize models:", error);
    });
