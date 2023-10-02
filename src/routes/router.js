const express = require("express")
const router = express.Router();
const produtosController = require("../controllers/produtos.controller");
const bairroController = require("../controllers/bairro.controller");
const cidadeController = require("../controllers/cidade.controller")
const pessoaController = require("../controllers/pessoa.controller")
const vendaController = require("../controllers/venda.controller")

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
router.get("/cidades", pessoaController.getPessoa)
router.get("/cidades/:id", pessoaController.getPessoaById)
router.put("/cidades/:id", pessoaController.updatePessoa)
router.delete("/cidades/:id", pessoaController.deletePessoa)

router.post("/pessoas", pessoaController.createPessoa)
router.get("/pessoas", pessoaController.getPessoa)
router.get("/pessoas/:id", pessoaController.getPessoaById)
router.put("/pessoas/:id", pessoaController.updatePessoa)
router.delete("/pessoas/:id", pessoaController.deletePessoa)

router.post("/vendas", vendaController.postVenda)
router.get("/vendas", vendaController.getVendas)
router.get("/vendas/:id", vendaController.getVendaById)
router.put("/vendas/:id", vendaController.putVenda)
router.delete("/vendas/:id", vendaController.deleteVenda)

module.exports = router