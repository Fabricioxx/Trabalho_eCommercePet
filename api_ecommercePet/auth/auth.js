const jwt = require('jsonwebtoken'); // para gerar o token
const auth = require('./app.json');

const bcryptjs = require('bcryptjs'); // para criptografar a senha

// incluir o token no objeto cliente
async function incluirToken(cliente) {
    // Gerar o token
  const token = await jwt.sign({ codigo: cliente.codigo }, auth.appId, {
    expiresIn: 3600 // Expira em 3600 segundos ou 1 hora.
  });
  cliente.token = token;
  cliente.senha = undefined;
}

// Criptografar a senha
async function gerarHash(usuario) {
  if (typeof usuario.senha !== 'undefined') {
    const hash = await bcryptjs.hash(usuario.senha, 10);
    usuario.senha = hash;
  }
  return usuario;
}

// Autorizar o acesso
function autorizar(req, res, next) {
  const authHeader = req.headers.authorization; // Authorization: Bearer token 

  if (!authHeader) {
    return res.status(401).send({ error: 'O token não foi enviado!' });
  }

  const partes = authHeader.split(' ');

  if (partes && partes.length !== 2) {
    return res.status(401).send({ error: 'Token incompleto!' });
  }

  const [tipo, token] = partes;

  if (!/^Bearer$/i.test(tipo)) {
    return res.status(401).send({ error: 'Token mal formado!' });
  }

  // Verificar se o token é válido
  jwt.verify(token, auth.appId, (err, usuario) => {
    if (err) {
      return res.status(401).send({ error: 'Token inválido!' });
    }
    req.usuarioLogadoId = usuario.id;
    return next();
  });
}

//https://jwt.io
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.QaphA5Y7kqO83S6l4kek2B9y5lKVIbWOSB0bn325pFc

module.exports = { 
  gerarHash,
  incluirToken,
  autorizar
};