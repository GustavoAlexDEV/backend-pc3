const connectToDatabase = require('../database/db');
const ReservaModel = require('../models/Reserva');
require('../models/Cliente');
require('../models/Pacote');

class ReservaDAO {
    async create(reservaData) {
        await connectToDatabase();
        return await ReservaModel.create(reservaData);
    }

    async findAllEnriched() {
        await connectToDatabase();
        
        if (!ReservaModel || !ReservaModel.find) {
            console.error("ERRO CRÍTICO: ReservaModel não foi carregado corretamente!");
            throw new Error("Model Reserva inválido");
        }

        const reservas = await ReservaModel.find({})
            .populate('clienteId')
            .populate('pacoteId');

        return reservas.map(r => {
            if (!r) return null;
            const doc = r.toJSON ? r.toJSON() : r;
            return {
                ...doc,
                cliente: doc.clienteId || null,
                pacote: doc.pacoteId || null
            };
        });
    }

    async delete(id) {
        await connectToDatabase();
        return await ReservaModel.findByIdAndDelete(id);
    }

    async update(id, dados) {
        await connectToDatabase();
        return await ReservaModel.findByIdAndUpdate(id, dados, { new: true });
    }
}

module.exports = new ReservaDAO();