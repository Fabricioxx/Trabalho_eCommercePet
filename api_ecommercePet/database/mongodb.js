const mongoose = require('mongoose');
// URL padrão ajustada para 127.0.0.1 (localhost) pois 0.0.0.0 não aceita conexão direta.
const DEFAULT_URL = 'mongodb://127.0.0.1:27017/eCommercePet';
const URL = process.env.MONGODB_URI || DEFAULT_URL;

mongoose.set('strictQuery', true);

const db = mongoose.connect(URL).catch(err => {
  console.error('\n[FALHA MONGO] Não foi possível conectar em ' + URL);
  console.error('Verifique se o serviço MongoDB está iniciado e ouvindo em 27017.');
  console.error('Dica: instale e inicie o MongoDB Community ou ajuste a variável MONGODB_URI.');
  console.error(err);
});
const con = mongoose.connection;

// CONEXÃO COM O MONGODB


// EVENTOS DE CONEXÃO 
con.on('open', function () {
  console.log('Conectado ao MongoDB em: ' + URL);
});

con.on('error', function (err) {
  console.log('Erro na conexão com o MongoDB: ' + (err && err.message ? err.message : 'sem detalhes')); 
});

con.on('close', function () {
  console.log('Desconetado do MongoDB!');
});

module.exports = db; // EXPORTA O MÓDULO db