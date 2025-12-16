const mongoose = require('mongoose');

const PacoteSchema = new mongoose.Schema({
    destino: { type: String, required: true },
    preco: { type: Number, required: true },
    dataIda: { type: String, required: true }, 
    dataVolta: { type: String, required: true }
});

PacoteSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id  }
});


const Pacote = mongoose.models.Pacote || mongoose.model('Pacote', PacoteSchema);

module.exports = Pacote;