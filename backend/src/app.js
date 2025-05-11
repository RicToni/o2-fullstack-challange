const express = require("express");
const cors = require("cors");
const sequelize = require("./database");
const Produto = require("./models/Produto");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtoRoutes);

// Sincronizar os modelos com o banco
sequelize.sync().then(() => {
  console.log("Modelos sincronizados com o banco.");
});

module.exports = app;