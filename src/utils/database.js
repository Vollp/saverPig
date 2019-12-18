const mssql = require("mssql");

const isNull = require("./isNull");
const config = require("../config/config");

const query = queryString => {
  if (isNull(queryString)) {
    return null;
  } else {
    mssql.close();

    return new Promise((resolve, reject) => {
      mssql
        .connect(config.database)
        .then(pool => {
          return pool.request().query(queryString);
        })
        .then(results => {
          mssql.close();
          resolve(results);
        })
        .catch(error => {
          console.error(`Erro ao tentar consultar o banco: ${error}`);
          mssql.close();
          reject(error);
        });
    });
  }
};

module.exports = { query };
