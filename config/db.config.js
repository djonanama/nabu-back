module.exports = {
  HOST: "localhost",
  PORT: 4432,
  USER: "gas_db",
  PASSWORD: "gas_db_qwerty123",
  DB: "gas_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
