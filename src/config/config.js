module.exports = {
  port: 3000,
  database: {
    poolSettings: {
      host: "localhost",
      user: "postgres",
      password: "admin",
      database: "postgres",
      port: 5432,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000
    }
  }
};
