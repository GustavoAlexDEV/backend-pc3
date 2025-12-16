const mongoose = require('mongoose');


const ReservaSchema = new mongoose.Schema({
    clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    pacoteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pacote', required: true },
    valorPago: { type: Number, required: true },
    dataReserva: { type: Date, default: Date.now }
});

ReservaSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id  }
});

const Reserva = mongoose.models.Reserva || mongoose.model('Reserva', ReservaSchema);

module.exports = Reserva;