const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

//Upload de arquivos
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Define o diretório onde os arquivos serão armazenados temporariamente

router.get('/', clienteController.listar);
router.post('/',upload.single('imagem'), clienteController.cadastrar);
router.get('/:codigo', clienteController.buscarPorId);
router.put('/:codigo',upload.single('imagem'), clienteController.atualizar);
router.delete('/:codigo', clienteController.excluir);

module.exports = router;
