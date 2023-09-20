const express = require("express")
const app = express();

require('dotenv').config();

const postsRouter = require('./routes/produtos.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api", postsRouter)

const porta = 3000;

app.listen(porta, (error) => {
    if (error) {
        console.log("Deu erro", error);
        return;
    }
    console.log("Rodando na porta", porta)
})

// tava funfando:
// netstat -tuln | grep 3000
// tcp6       0      0 :::3000                 :::*                    OUÇA
