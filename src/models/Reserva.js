const { randomUUID } = require('crypto'); // Mudou aqui

class Reserva {
    constructor(clienteId, pacoteId, valorPago) {
        this.id = randomUUID(); // Mudou aqui
        this.clienteId = clienteId;
        this.pacoteId = pacoteId;
        this.valorPago = parseFloat(valorPago);
        this.dataReserva = new Date().toISOString();
    }
}
module.exports = Reserva;