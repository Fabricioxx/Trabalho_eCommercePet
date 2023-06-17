const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

//Upload de arquivos
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Define o diretório onde os arquivos serão armazenados temporariamente

router.get('/', produtoController.listar);
router.post('/', upload.single('imagem'), produtoController.salvar);
router.get('/:codigo', produtoController.buscarPorId);
router.put('/:codigo',upload.single('imagem'), produtoController.atualizar);
router.delete('/:codigo', produtoController.excluir);

module.exports = router;