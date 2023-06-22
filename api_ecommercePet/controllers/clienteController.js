const clienteModel = require('../models/clienteModel');
const auth = require('../auth/auth');
const fs = require('fs');

class ClienteController {

    //POST /clientes
    async cadastrar(req, res) {
        try {
            let cliente = req.body;
      
            // Verificar se um arquivo de imagem foi enviado
            if (req.file) {
              // Obter o caminho temporário do arquivo de imagem
              const imagemPath = req.file.path;
      
              // Ler o conteúdo do arquivo da imagem
              const imagemData = fs.readFileSync(imagemPath);
      
              // Definir os dados da imagem no objeto cliente
              cliente.imagem = {
                data: imagemData,
                contentType: req.file.mimetype // Usar o tipo de conteúdo fornecido pelo multer
              };
      
              // Excluir o arquivo temporário da imagem
              fs.unlinkSync(imagemPath);
            }

            
      
            const max = await clienteModel.findOne({}).sort({ codigo: -1 }).exec(); // exec() retorna uma Promise
            cliente.codigo = max ? max.codigo + 1 : 1;

            const resultado = await clienteModel.create(cliente);
            auth.incluirToken(resultado);
            
            

           
            res.status(201).json(resultado);
          } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: 'Erro ao realizar cadastro do cliente.' });
          }
    }

    //GET /clientes
    async listar(req, res) {

        try {
            const resultado = await clienteModel.find({});

            if (!resultado) {
                res.status(404).json({ mensagem: 'Nenhum cliente encontrado!' })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro durante a listagem.' })
        }
    }

    //GET /clientes/:codigo
    async buscarPorId(req, res) {
        const codigo = req.params.codigo;

        try {
            const resultado = await clienteModel.findOne({ 'codigo': codigo });

            if (!resultado) {
                res.status(404).json({ mensagem: `cliente com ID: ${codigo} não encontrado!` })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar busca por ID.' })
        }
    }


    //PUT /clientes/:codigo
    async atualizar(req, res) {
        const codigo = req.params.codigo; // Converte o ID de string para number

        try {
            const clienteExistente = await clienteModel.findOne({ 'codigo': codigo});
    
            if (!clienteExistente) {
                res.status(404).json({ mensagem: `Nenhum cliente com o ID: ${codigo} encontrado para alteração!` });
                return;
            }
    
            const _id = String(clienteExistente._id);
            const atualizacao = req.body;
    
            // Verifica se há um campo 'imagem' na requisição PUT
            if (req.body.imagem) {
                try {
                    const imagemPath = req.body.imagem;
                    const imagemData = fs.readFileSync(imagemPath);
    
                    // Atualiza os dados da imagem no objeto de atualização
                    atualizacao.imagem = {
                        data: imagemData,
                        contentType: 'image/jpg' // Substitua pelo tipo de conteúdo correto da sua imagem
                    };
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ mensagem: 'Erro ao carregar a imagem.' });
                    return;
                }
            }
    
            await clienteModel.findByIdAndUpdate(String(_id), atualizacao);
    
            res.status(200).json({ mensagem: 'Cliente atualizado com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: 'Erro ao realizar alteração de cliente.' });
        }
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;

        try {
            const _id = String((await clienteModel.findOne({ 'codigo': codigo }))._id);
            await clienteModel.findByIdAndRemove(String(_id));

            if (!_id) {
                res.status(404).json({ mensagem: `Nenhum cliente com o ID: ${_id} encontrado para ser excluido!` })
            } else {
                res.status(200).json({ mensagem: `cliente excluido com sucesso` });
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao excluir o cliente.' })
        }
    }
}

module.exports = new ClienteController();