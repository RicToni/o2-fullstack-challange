const { Produto } = require('../models');

const criarProduto = async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao criar produto', detalhes: err.message });
  }
};

const listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar produtos', detalhes: err.message });
  }
};

const buscarProdutoPorId = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar produto', detalhes: err.message });
  }
};

const atualizarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    await produto.update(req.body);
    res.json(produto);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar produto', detalhes: err.message });
  }
};

const deletarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    await produto.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir produto', detalhes: err.message });
  }
};

module.exports = {
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto,
};