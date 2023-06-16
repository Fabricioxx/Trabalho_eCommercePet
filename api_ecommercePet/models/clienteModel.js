const mongoose = require('mongoose');

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
    imagem: {data: Buffer, contentType: String}
});

module.exports = mongoose.model('clientes', clienteSchema);