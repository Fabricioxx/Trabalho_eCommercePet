const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({

    codigo: Number,
    data: { type: Date, default: Date.now },
    total: Number, // preço total do pedido
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'clientes' }, // ref: 'cliente' - para referenciar o model 'cliente' 
    produto: [{ type: mongoose.Schema.Types.ObjectId, ref: 'produtos' }],
    status: { type: String, enum: ['Aguardando Pagamento', 'Faturado', 'Enviado', 'Cancelado'], default: 'Aguardando Pagamento' }
});

module.exports = mongoose.model('pedidos', pedidoSchema);