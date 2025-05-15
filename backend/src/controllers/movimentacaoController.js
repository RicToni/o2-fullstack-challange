const Movimentacao = require('../models/Movimentacao');
const Produto = require('../models/Produto');

// Criar movimentação de estoque (entrada ou saída)
const criarMovimentacao = async (req, res) => {
  try {
    const { produtoId, tipo, quantidade } = req.body;

    // Verificar se o produto existe
    const produto = await Produto.findByPk(produtoId);
    if (!produto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    // Validar quantidade para entrada ou saída
    if (tipo === 'saida' && produto.quantidade < quantidade) {
      return res.status(400).json({ mensagem: 'Estoque insuficiente para a saída' });
    }

    // Criar a movimentação
    const movimentacao = await Movimentacao.create({
      produtoId,
      tipo,
      quantidade,
    });

    // Atualizar o estoque do produto
    if (tipo === 'entrada') {
      produto.quantidade += quantidade;
    } else {
      produto.quantidade -= quantidade;
    }

    await produto.save();

    return res.status(201).json(movimentacao);
  } catch (error) {
    console.error('Erro ao criar movimentação:', error);
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

// Listar todas as movimentações
const listarMovimentacoes = async (req, res) => {
  try {
    const movimentacoes = await Movimentacao.findAll();
    return res.status(200).json(movimentacoes);
  } catch (error) {
    console.error('Erro ao listar movimentações:', error);
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

// Buscar movimentações de um produto específico
const listarMovimentacoesPorProduto = async (req, res) => {
  try {
    const { produtoId } = req.params;
    const movimentacoes = await Movimentacao.findAll({
      where: { produtoId },
    });

    if (!movimentacoes.length) {
      return res.status(404).json({ mensagem: 'Nenhuma movimentação encontrada para este produto' });
    }

    return res.status(200).json(movimentacoes);
  } catch (error) {
    console.error('Erro ao buscar movimentações por produto:', error);
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

module.exports = {
  criarMovimentacao,
  listarMovimentacoes,
  listarMovimentacoesPorProduto,
};