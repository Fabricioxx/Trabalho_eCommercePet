const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

// codigo: {type: Number, unique: true}, // unique: true -> não permite repetição de valores
const clienteSchema = new mongoose.Schema({
    codigo: Number,
    nome: String,
    endereco: String, 
    telefone: Number,    
    cpf: String,
    nomeCartao: String,
    numeroCartao: String,
    cvcCartao: String,
    email: String,
    senha: String,
    imagem: {data: Buffer, contentType: String},
    token: String
});

// criptografar a senha antes de salvar no banco de dados
clienteSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.senha, 10);
    this.senha = hash;
    next();
  });

module.exports = mongoose.model('clientes', clienteSchema);