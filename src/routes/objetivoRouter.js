const express = require("express");
const router = express.Router();

const Objetivo = require("../models/Objetivo");

router.post("/", async (req, res) => {
  const { valObjetivo, descricao, idCliente } = req.body;

  const response = await Objetivo.register(valObjetivo, descricao, idCliente);

  res.status(response.status).json(response.data);
});

// router.get("/", (req, res) => {
//   const { idCliente } = req.body;

//   const response = Objetivo.search(idCliente);
  
//   res.status(response.status).json(response.data);
// });

module.exports = router;
