const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');


router.post('/', pedidoController.salvar);

//listar todos os pedidos de um cliente
router.get('/', pedidoController.listar);

router.get('/:clienteId', pedidoController.listarPorId);

// :codigo - código do pedido
router.get('/:clienteId/:codigo', pedidoController.buscarPorCodigo);

//PUT /pedido/:clienteId/:codigo/:status
router.put('/:clienteId/:codigo/:status', pedidoController.editarStatus);

module.exports = router;