const db = require("../utils/database");

const register = async (valObjetivo, descricao) => {
  try {
    const data = await db.query(
      `insert into objetivo(vlr_objetivo, descricao) values(${valObjetivo}, '${descricao}') returning *;`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

const search = async (idCliente) => {
  try {
    const data = await db.query(
      `select * from objetivo where id_cliente = ${idCliente};`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

const searchForNumber = async (idCliente, numObjetivo) => {
  try {
    const data = await db.query(
      `select * from objetivo where id_cliente = ${idCliente};`
    );

    if (numObjetivo > 0 && numObjetivo <= data.length) {
      return data[numObjetivo - 1];
    }

    return { message: "objetivo inválido ou não encontrado" };
  } catch (error) {
    console.error(error);
  }
};

module.exports = { register, search, searchForNumber };
