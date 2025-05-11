const app = require("./app");
const db = require('./database');

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  
  try {
    await db.authenticate();
    console.log('Conexão com MySQL estabelecida com sucesso.');
  } catch (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  }
});