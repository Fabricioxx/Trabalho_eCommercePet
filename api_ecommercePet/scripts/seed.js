// Script de seed inicial
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

const Categoria = require('../models/categoriaModel');
const Produto = require('../models/produtoModel');
const Cliente = require('../models/clienteModel');
const Pedido = require('../models/pedidoModel');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/eCommercePet';

async function run() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('[SEED] Conectado ao Mongo');

    // Limpa coleções (apenas para estudo; cuidado em produção)
    await Promise.all([
      Categoria.deleteMany({}),
      Produto.deleteMany({}),
      Cliente.deleteMany({}),
      Pedido.deleteMany({})
    ]);

    console.log('[SEED] Coleções limpas.');

    // Categorias
    const categoriasData = [
      { codigo: 1, nome: 'Acessórios', descricao: 'Itens para pets' },
      { codigo: 2, nome: 'Alimentação', descricao: 'Rações e petiscos' },
      { codigo: 3, nome: 'Higiene', descricao: 'Limpeza e cuidados' }
    ];
    const categorias = await Categoria.insertMany(categoriasData);
    console.log(`[SEED] Inseridas ${categorias.length} categorias.`);

    // Produtos (referenciam categorias pelo ObjectId)
    const produtosData = [
      { codigo: 1, nome: 'Coleira Neon', descricao: 'Coleira ajustável', preco: 29.9, categoria: categorias[0]._id, animal: 'Cachorro' },
      { codigo: 2, nome: 'Ração Premium', descricao: 'Sabor frango', preco: 89.5, categoria: categorias[1]._id, animal: 'Cachorro' },
      { codigo: 3, nome: 'Areia Sanitária', descricao: 'Alta absorção', preco: 25.0, categoria: categorias[2]._id, animal: 'Gato' }
    ];
    const produtos = await Produto.insertMany(produtosData);
    console.log(`[SEED] Inseridos ${produtos.length} produtos.`);

    // Cliente (senha será hash via hook)
    const cliente = await Cliente.create({
      codigo: 1,
      nome: 'Cliente Teste',
      endereco: 'Rua Exemplo, 123',
      telefone: 11999999999,
      cpf: '00000000000',
      nomeCartao: 'CLIENTE TESTE',
      numeroCartao: '4111111111111111',
      cvcCartao: '123',
      email: 'cliente@teste.com',
      senha: 'senha123'
    });
    console.log('[SEED] Cliente criado:', cliente.email);

    // Pedido exemplo
    const pedido = await Pedido.create({
      codigo: 1,
      total: produtos[0].preco + produtos[1].preco,
      cliente: cliente._id,
      produto: [produtos[0]._id, produtos[1]._id],
      status: 'Aguardando Pagamento'
    });
    console.log('[SEED] Pedido criado código:', pedido.codigo);

    console.log('\n[SEED] Finalizado com sucesso.');
  } catch (err) {
    console.error('[SEED] Erro:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();
