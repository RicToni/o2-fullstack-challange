const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    logging: false,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao MySQL com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MySQL:", error);
  }
})();

module.exports = sequelize;