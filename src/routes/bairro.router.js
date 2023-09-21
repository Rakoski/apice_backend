const express = require("express")
const router = express.Router()
const bairroController = require("../controllers/bairro.controller");

router.get("/bairros", bairroController.getBairros)
router.get("/bairros/:id", bairroController.getBairroById)
router.post("/bairros", bairroController.postBairro)
router.put("/bairros/:id", bairroController.putBairro)
router.delete("/bairros/:id", bairroController.deleteBairro)

module.exports = router