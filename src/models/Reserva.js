const { v4: uuidv4 } = require('uuid');

class Reserva {
    constructor(clienteId, pacoteId, valorPago) {
        this.id = uuidv4();
        this.clienteId = clienteId;
        this.pacoteId = pacoteId;
        this.valorPago = parseFloat(valorPago);
        this.dataReserva = new Date().toISOString();
    }
}
module.exports = Reserva;