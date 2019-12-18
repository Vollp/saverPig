const express = require("express");
const router = express.Router();

const Objetivo = require("../models/Objetivo");

router.post("/", async (req, res) => {
  const { valObjetivo, descricao } = req.body;

  const response = await Objetivo.register(valObjetivo, descricao);
  res.status(200).json(response);
});

router.get("/", (req, res) => {
  const { idCliente } = req.body;
  const response = Objetivo.search(idCliente);

  res.status(response.status).json(response.data);
});

module.exports = router;
