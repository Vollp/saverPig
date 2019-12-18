const db = require("../utils/database");

const register = async (valObjetivo, descricao, idCliente) => {
  const data = await db.query(
    `insert into objetivo(vlr_objetivo, descricao, id_cliente) values(${valObjetivo}, ${descricao}, ${idCliente});`
  );

  return {
      data: data,
      status: 200
  };
};

module.exports = { register };
