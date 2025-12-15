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
    // Adicione estes métodos na classe ReservaDAO
    delete(id) {
        const index = db.reservas.findIndex(r => r.id === id);
        if (index !== -1) {
            db.reservas.splice(index, 1);
            return true;
        }
        return false;
    }

    update(id, dados) {
        const index = db.reservas.findIndex(r => r.id === id);
        if (index !== -1) {
            // Mantém o ID e DataReserva originais, atualiza o resto
            const original = db.reservas[index];
            db.reservas[index] = { 
                ...original, 
                clienteId: dados.clienteId, 
                pacoteId: dados.pacoteId, 
                valorPago: parseFloat(dados.valorPago)
            }; 
            return db.reservas[index];
        }
        return null;
    }
}
module.exports = new ReservaDAO();