const express = require("express")
const router = express.Router();
const produtosController = require("../controllers/produtos.controller");
const bairroController = require("../controllers/bairro.controller");
const cidadeController = require("../controllers/cidade.controller")
const pessoaController = require("../controllers/pessoa.controller")

router.get("/produtos", produtosController.getProdutos)
router.get("/produtos/:id", produtosController.getProdutoById)
router.post("/produtos", produtosController.postProduto)
router.put("/produtos/:id", produtosController.putProduto)
router.delete("/produtos/:id", produtosController.deleteProduto)

router.get("/bairros", bairroController.getBairros)
router.get("/bairros/:id", bairroController.getBairroById)
router.post("/bairros", bairroController.postBairro)
router.put("/bairros/:id", bairroController.putBairro)
router.delete("/bairros/:id", bairroController.deleteBairro)

router.get("/cidades", cidadeController.getCidades)
router.get("/cidades/:id", cidadeController.getCidadeById)
router.post("/cidades", cidadeController.postCidade)
router.put("/cidades/:id", cidadeController.putCidade)
router.delete("/cidades/:id", cidadeController.deleteCidade)

router.post("/pessoas", pessoaController.createPessoa)

module.exports = router