const db = require("../utils/database");

const register = async (valObjetivo, descricao) => {
  try {
    const data = await db.query(
      `insert into objetivo(vlr_objetivo, descricao) values(${valObjetivo}, '${descricao}') returning *;`
    );

    return data
  } catch (error) {
    console.error(error);
  }
};

module.exports = { register };
