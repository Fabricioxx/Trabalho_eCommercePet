const pedidoModel = require("../models/pedidoModel");
const Produto = require('../models/produtoModel'); // Importe o modelo do produto
const Cliente = require('../models/clienteModel'); // Importe o modelo do cliente

/*
const pedidot = {
  "codigo": 2,
  "data": "2023-06-23T18:30:05.320Z",
  "total": 2,
  "cliente": "6494a9c51f14f0126d8eda0d",
  "produto": [
    "649126dfcc01de8a69ed92bb"
  ],
  "status": "Enviado"
};
*/

class PedidoController {
  // POST /pedido
  async salvar(req, res){
    try {
      const { codigo, data, total, cliente, produto, status } = req.body;

      // Criar uma nova instância do Pedido com os campos
      const pedido = new pedidoModel({
        codigo,
        data,
        total,
        cliente,
        produto,
        status
      });

    
      // Salvar o pedido no banco de dados
      const savedPedido = await pedido.save();
  
      res.status(201).json(savedPedido);
    } catch (error) {
      res.status(500).json({ error: 'Não foi possível salvar o pedido' });
    }
  }

  

  // GET /pedidos
  async listar(req, res) {
    const resultado = await pedidoModel.find({});
    try {
      if (!resultado) {
        res.status(404).json({ mensagem: "Nenhum Pedido Encontrado!" });
      } else {
        res.status(200).json(resultado);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: "Erro durante a listagem." });
    }
  }

  // GET /pedido/:clienteId
  async listarPorId(req, res) {
    

// pega todos os pedidos que tem o id do cliente
   const resultado = await pedidoModel.find({ cliente: req.params.clienteId });

    if (!resultado) {
      res.status(404).json({ mensagem: "Nenhum Pedido Encontrado!" });

    } 

    res.status(200).json(resultado);
  }

  // GET /pedido/:clienteId/:codigo
  // buscar pedido por código e clienteId
  async buscarPorCodigo(req, res) {
    const { clienteId, codigo } = req.params;
    const resultado = await pedidoModel.findOne({
      codigo: codigo,
      cliente: clienteId,
    });
    res.status(200).json(resultado);
  }

  // PUT /pedido/:clienteId/:codigo/:status
  async editarStatus(req, res) {
    try {
      const { clienteId, codigo, status } = req.params;
      //const { novoStatus } = req.body;

      // Verificar se o pedido existe através do código e do clienteId
      const pedido = await pedidoModel.findOne({
        codigo: codigo,
        cliente: clienteId,
      });

      if (!pedido) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }

      if (pedido.status == "Cancelado" || pedido.status == "Entregue") {
        return res
          .status(400)
          .json({ message: "Não é possível alterar o status do pedido" });
      }

      // Atualizar o status do pedido
      pedido.status = status;
      await pedido.save();

      res
        .status(200)
        .json({ message: "Status do pedido atualizado com sucesso" });
    } catch (error) {
      console.error("Erro ao editar o status do pedido:", error);
      res.status(500).json({ message: "Erro ao editar o status do pedido" });
    }
  }
}

module.exports = new PedidoController();
