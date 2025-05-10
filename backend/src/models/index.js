const Produto = require('./Produto');
const Movimentacao = require('./Movimentacao');

Produto.hasMany(Movimentacao, {
  foreignKey: 'produtoId',
  onDelete: 'CASCADE',
});

Movimentacao.belongsTo(Produto, {
  foreignKey: 'produtoId',
});