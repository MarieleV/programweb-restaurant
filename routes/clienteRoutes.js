const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const authMiddleware = require('../middlewares/authMiddleware'); // Adicione o middleware

// Criar novo cliente (pode ser público ou protegido, depende da lógica do seu sistema)
router.post('/', authMiddleware, clienteController.criar); // Se for para exigir autenticação

// Listar todos os clientes
router.get('/', authMiddleware, clienteController.listarTodos); // Adicione o middleware se for necessário

// Excluir cliente por ID
router.delete('/:id', authMiddleware, clienteController.excluir); // Adicione o middleware se for necessário

module.exports = router;
