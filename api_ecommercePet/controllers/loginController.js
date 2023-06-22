const clienteModel = require('../models/clienteModel');
const auth = require('../auth/auth');
const bcryptjs = require('bcryptjs');

class LoginController {

    async login(req, res) {
        const { email, senha } = req.body;
      
        try {
          //const cliente = await clienteModel.findOne({ email });
          const resultado = await clienteModel.findOne({ 'email': email });
      
          if (!resultado) {
            return res.status(400).send({ error: 'Usuário não encontrado!' });
          }
      
          /*
          if (!await bcryptjs.compare(senha, cliente.senha)) {
              return res.status(400).send({ error: 'Senha inválida!' });
          }
          */
          
          // await auth.incluirToken(cliente);
          res.status(200).json(resultado);
        } catch (error) {
          res.status(500).send({ error: 'Erro interno no servidor' });
        }
      }
      

    }
module.exports = new LoginController();