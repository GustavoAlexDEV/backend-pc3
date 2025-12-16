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
        const reservas = await ReservaModel.find({})
            .populate('clienteId')
            .populate('pacoteId');

        return reservas.map(r => {
            const doc = r.toJSON();
            return {
                ...doc,
                cliente: doc.clienteId, 
                pacote: doc.pacoteId
            };
        });
    }

    async delete(id) {
        await connectToDatabase();
        const result = await ReservaModel.findByIdAndDelete(id);
        return !!result;
    }

    async update(id, dados) {
        await connectToDatabase();
        return await ReservaModel.findByIdAndUpdate(id, dados, { new: true });
    }
}
module.exports = new ReservaDAO();