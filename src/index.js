const express = require("express");
const index = express();
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

sequelize.sync({ force: true }).then(() => {
    console.log('Banco de dados sincronizado.');
});

const postsRouter = require('./routes/router')

index.use(express.urlencoded({ extended: false }))
index.use(express.json())

index.use("/api", postsRouter)

// pra facilitar o netstat
const porta = 8080;

sequelize.sync()
    .then(() => {
        index.listen(porta, () => {
            console.log("Servidor ta rodando na porta", porta);
        });
    })
    .catch((error) => {
        console.error("Erro ao sincronizar o sequelize: ", error);
    });
