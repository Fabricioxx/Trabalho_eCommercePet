const mongoose = require('mongoose');
// Permite definir a URL via variável de ambiente MONGODB_URI ou usa padrão local.
const URL = process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/eCommercePet';
const db = mongoose.connect(URL, {
  // Opções podem ser adicionadas aqui (ex: authSource, user, pass) futuramente
});
const con = mongoose.connection;

// CONEXÃO COM O MONGODB


// EVENTOS DE CONEXÃO 
con.on('open', function () {
  console.log('Conectado ao MongoDB em: ' + URL);
});

con.on('error', function () {
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function () {
  console.log('Desconetado do MongoDB!');
});

module.exports = db; // EXPORTA O MÓDULO db