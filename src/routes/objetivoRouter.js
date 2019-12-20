const express = require("express");
const router = express.Router();

const Objetivo = require("../models/Objetivo");

router.post("/", async (req, res) => {
  const { valObjetivo, descricao } = req.body;

  const response = await Objetivo.register(valObjetivo, descricao);
  res.status(200).json(response);
});

router.get("/", async (req, res) => {
  const { idCliente } = req.body;
  const response = await Objetivo.search(idCliente);

  res.status(200).json(response);
});

router.get("/search-number", async (req, res) => {
  const { idCliente, numObjetivo } = req.body;
  const response = await Objetivo.searchForNumber(idCliente, numObjetivo);

  res.status(200).json(response)
});

module.exports = router;
