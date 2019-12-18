const express = require("express");
const router = express.Router();

const Objetivo = require("./objetivoRouter");

router.use("/objetivo", Objetivo);

module.exports = router;
