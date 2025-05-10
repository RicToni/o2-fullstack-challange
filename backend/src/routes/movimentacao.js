const express = require('express');
const router = express.Router();
const { Movimentacao, Produto } = require('../models');

// Criar movimentação (entrada/saída)
router.post('/movimentacao', async (req, res) => {
  const { produtoId, tipo, quantidade } = req.body;

  try {
    // Verificar se o produto existe
    const produto = await Produto.findByPk(produtoId);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // Criar a movimentação
    const movimentacao = await Movimentacao.create({
      produtoId,
      tipo,
      quantidade,
    });

    // Atualizar a quantidade do produto
    if (tipo === 'entrada') {
      produto.quantidadeDisponivel += quantidade;
    } else if (tipo === 'saida') {
      if (produto.quantidadeDisponivel < quantidade) {
        return res.status(400).json({ error: 'Estoque insuficiente para saída' });
      }
      produto.quantidadeDisponivel -= quantidade;
    }
    await produto.save();

    return res.status(201).json(movimentacao);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar movimentação' });
  }
});

// Listar todas as movimentações
router.get('/movimentacoes', async (req, res) => {
  try {
    const movimentacoes = await Movimentacao.findAll({
      include: Produto, // Incluir as informações do produto associado
    });
    return res.json(movimentacoes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar movimentações' });
  }
});

// Buscar movimentações por produto ou período
router.get('/movimentacoes/:produtoId', async (req, res) => {
  const { produtoId } = req.params;

  try {
    const movimentacoes = await Movimentacao.findAll({
      where: { produtoId },
      include: Produto,
    });
    return res.json(movimentacoes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar movimentações por produto' });
  }
});

// Excluir uma movimentação
router.delete('/movimentacao/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const movimentacao = await Movimentacao.findByPk(id);
    if (!movimentacao) {
      return res.status(404).json({ error: 'Movimentação não encontrada' });
    }

    // Atualizar o produto
    const produto = await Produto.findByPk(movimentacao.produtoId);
    if (movimentacao.tipo === 'entrada') {
      produto.quantidadeDisponivel -= movimentacao.quantidade;
    } else if (movimentacao.tipo === 'saida') {
      produto.quantidadeDisponivel += movimentacao.quantidade;
    }
    await produto.save();

    // Excluir a movimentação
    await movimentacao.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao excluir movimentação' });
  }
});

module.exports = router;