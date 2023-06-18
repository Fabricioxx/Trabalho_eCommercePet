const pedidoModel = require("../models/pedidoModel");
const clienteModel = require("../models/clienteModel");
const produtoModel = require("../models/produtoModel");

class PedidoController {
  // POST /pedido
  async salvar(req, res) {
    const max = await pedidoModel.findOne({}).sort({ codigo: -1 });
    const pedido = req.body;
    pedido.codigo = max == null ? 1 : max.codigo + 1;

    const cliente = await clienteModel.findOne({ _id: pedido.cliente });
    pedido.cliente = cliente._id;

    // Verificar se os produtos existem
    const produtos = await produtoModel.find({ _id: { $in: pedido.produto } });

    if (produtos.length != pedido.produto.length) {
      return res
        .status(400)
        .json({ message: "Um ou mais produtos não existem" });
    }

    // Extrair os IDs dos produtos da lista recebida na requisição
    const produtosIds = produtos.map((produto) => produto._id);

    // Atribuir a lista de IDs dos produtos ao campo 'produtos' do pedido
    pedido.produtos = produtosIds;

    const resultado = await pedidoModel.create(pedido);
    res.status(201).json(resultado);
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
