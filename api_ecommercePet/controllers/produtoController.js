const produtoModel = require('../models/produtoModel');
const fs = require('fs');

class ProdutoController {

    async salvar(req, res) {
        try {
          let produto = req.body;
    
          // Verificar se um arquivo de imagem foi enviado
          if (req.file) {
            // Obter o caminho temporário do arquivo de imagem
            const imagemPath = req.file.path;
    
            // Ler o conteúdo do arquivo da imagem
            const imagemData = fs.readFileSync(imagemPath);
    
            // Definir os dados da imagem no objeto do produto
            produto.imagem = {
              data: imagemData,
              contentType: req.file.mimetype // Usar o tipo de conteúdo fornecido pelo multer
            };
    
            // Excluir o arquivo temporário da imagem
            fs.unlinkSync(imagemPath);
          }
    
          const max = await produtoModel.findOne({}).sort({ codigo: -1 });
          produto.codigo = max == null ? 1 : max.codigo + 1;
          const resultado = await produtoModel.create(produto);
          res.status(201).json(resultado);
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensagem: 'Erro ao realizar cadastro do produto.' });
        }finally{
          console.log('Requisição de cadastro de produto finalizada.');
        }

      }

    async listar(req, res) {

        try {
            const resultado = await produtoModel.find({});

            if (!resultado) {
                res.status(404).json({ mensagem: 'Nenhum produto encontrado!' })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro durante a listagem.' })
        }
    }

    // GET /produtos/:codigo
    async buscarPorId(req, res) {
        const codigo = req.params.codigo;

        try {
            const resultado = await produtoModel.findOne({ 'codigo': codigo });

            if (!resultado) {
                res.status(404).json({ mensagem: `Produto com ID: ${codigo} não encontrado!` })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar busca por ID.' })
        }
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
    
        try {
            const produtoExistente = await produtoModel.findOne({ 'codigo': codigo });
    
            if (!produtoExistente) {
                res.status(404).json({ mensagem: `Nenhum produto com o ID: ${codigo} encontrado para alteração!` });
                return;
            }
    
            const _id = String(produtoExistente._id);
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
    
            await produtoModel.findByIdAndUpdate(String(_id), atualizacao);
    
            res.status(200).json({ mensagem: 'Produto atualizado com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: 'Erro ao realizar alteração de produto.' });
        }
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;

        try {
            const _id = String((await produtoModel.findOne({ 'codigo': codigo }))._id);
            await produtoModel.findByIdAndRemove(String(_id));

            if (!_id) {
                res.status(404).json({ mensagem: `Nenhum produto com o ID: ${_id} encontrado para ser excluido!` })
            } else {
                res.status(200).json({ mensagem: `Produto excluido com sucesso` });
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao excluir o produto.' })
        }
    }
}

module.exports = new ProdutoController();