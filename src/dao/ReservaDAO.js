const db = require('../database/db');

class ReservaDAO {
    create(reserva) {
        db.reservas.push(reserva);
        return reserva;
    }

    findAllEnriched() {
        // Faz o "JOIN" manual entre as tabelas
        return db.reservas.map(reserva => {
            const cliente = db.clientes.find(c => c.id === reserva.clienteId);
            const pacote = db.pacotes.find(p => p.id === reserva.pacoteId);
            return { ...reserva, cliente, pacote };
        });
    }

    // Lógica do Relatório
    getRelatorioDestinos() {
        const relatorio = {};
        
        db.reservas.forEach(reserva => {
            const pacote = db.pacotes.find(p => p.id === reserva.pacoteId);
            if (pacote) {
                const destino = pacote.destino;
                if (!relatorio[destino]) {
                    relatorio[destino] = { destino, quantidade: 0, valorTotal: 0 };
                }
                relatorio[destino].quantidade += 1;
                relatorio[destino].valorTotal += reserva.valorPago;
            }
        });
        
        return Object.values(relatorio);
    }
}
module.exports = new ReservaDAO();