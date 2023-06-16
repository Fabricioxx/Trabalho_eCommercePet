const mongoose = require('mongoose');
const URL = 'mongodb://0.0.0.0:27017/eCommercePet';
const db = mongoose.connect(URL);
const con = mongoose.connection;

// CONEXÃO COM O MONGODB


// EVENTOS DE CONEXÃO 
con.on('open', function () {
  console.log('Conectado ao MongoDB!');
});

con.on('error', function () {
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function () {
  console.log('Desconetado do MongoDB!');
});

module.exports = db; // EXPORTA O MÓDULO db