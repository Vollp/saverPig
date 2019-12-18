const express = require("express");
const cors = require("cors");

const app = express();

const config = require("./config/config");
const router = require("./routes/router");

app.use(cors());
app.use("/", router);

app.listen(config.port, () => {
  console.log(`O servidor está rodando na porta: ${config.port}`);
});
