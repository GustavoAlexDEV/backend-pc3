const { randomUUID } = require('crypto'); 

class Reserva {
    constructor(clienteId, pacoteId, valorPago) {
        this.id = randomUUID();
        this.clienteId = clienteId;
        this.pacoteId = pacoteId;
        this.valorPago = parseFloat(valorPago);
        this.dataReserva = new Date().toISOString();
    }
}
module.exports = Reserva;