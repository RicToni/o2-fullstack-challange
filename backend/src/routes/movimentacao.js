const express = require('express');
const router = express.Router();
const movimentacaoController = require('../controllers/movimentacaoController');

// Rota para criar movimentação (entrada ou saída)
router.post('/', movimentacaoController.criarMovimentacao);

// Rota para listar todas as movimentações
router.get('/', movimentacaoController.listarMovimentacoes);

// Rota para listar movimentações por produto
router.get('/produto/:produtoId', movimentacaoController.listarMovimentacoesPorProduto);

module.exports = router;