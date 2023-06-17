const categoriaModel = require('../models/categoriaModel');

class CategoriaController {

    // POST /categorias
    async salvar(req, res) {

        const { codigo, nome, descricao } = req.body;
      
        try {
          const novaCategoria = new categoriaModel({ codigo, nome, descricao });
          const resultado = await novaCategoria.save(); // Executa a query de insert no MongoDB
      
          res.status(201).json(resultado);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Erro ao cadastrar a categoria' });
        }
      }

    

    // GET /categorias
    async listar(req, res) {

        try {
            const resultado = await categoriaModel.find({});

            if (!resultado || resultado.length === 0) {
                res.status(404).json({ mensagem: 'Nenhuma categoria encontrada!' });
              } else {
                res.status(200).json(resultado);
              }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro durante a listagem.' })
        }
    }

    // GET /categorias/:id
    async buscarPorId(req, res) {
        const id = req.params.id;

        try {
            const resultado = await categoriaModel.findOne({ 'id': id });

            if (!resultado) {
                res.status(404).json({ mensagem: `categoria com ID: ${id} não encontrado!` })
            } else {
                res.status(200).json(resultado);
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao realizar busca por ID.' })
        }
    }

    // PUT /categorias/:id
    async atualizar(req, res) {
        const id = req.params.id;
    
        try {
            const categoriaExistente = await categoriaModel.findOne({ 'id': id });
    
            if (!categoriaExistente) {
                res.status(404).json({ mensagem: `Nenhum categoria com o ID: ${id} encontrado para alteração!` });
                return;
            }
    
            const _id = String(categoriaExistente._id);
            const atualizacao = req.body;
    
            await categoriaModel.findByIdAndUpdate(String(_id), atualizacao);
    
            res.status(200).json({ mensagem: 'Categoria atualizado com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensagem: 'Erro ao realizar alteração de categoria.' });
        }
    }

    // DELETE /categorias/:id
    async excluir(req, res) {
        const id = req.params.id;

        try {
            const _id = String((await categoriaModel.findOne({ 'id': id }))._id);
            await categoriaModel.findByIdAndRemove(String(_id));

            if (!_id) {
                res.status(404).json({ mensagem: `Nenhum categoria com o ID: ${_id} encontrado para ser excluido!` })
            } else {
                res.status(200).json({ mensagem: `Categoria excluido com sucesso` });
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensagem: 'Erro ao excluir o categoria.' })
        }
    }
}

module.exports = new CategoriaController();