const express = require("express")
const router = express.Router()

const produtosController = require("../controllers/produtos.controller")

router.get("/produtos", produtosController.getProdutos)
router.get("/produtos/:id", produtosController.getProdutoById)
router.post("/produtos", produtosController.postProduto)
router.put("/produtos/:id", produtosController.putProduto)
router.delete("/produtos/:id", produtosController.deleteProduto)

module.exports = router