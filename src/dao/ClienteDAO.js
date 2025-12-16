const connectToDatabase = require('../database/db');
const ClienteModel = require('../models/Cliente');

class ClienteDAO {
    async create(clienteData) {
        await connectToDatabase();
        return await ClienteModel.create(clienteData);
    }

    async findAll() {
        await connectToDatabase();
        return await ClienteModel.find({});
    }

    async findByEmail(email) {
        await connectToDatabase();
        return await ClienteModel.findOne({ email });
    }

    async delete(id) {
        await connectToDatabase();
        const result = await ClienteModel.findByIdAndDelete(id);
        return !!result; // Retorna true se deletou
    }

    async update(id, dados) {
        await connectToDatabase();
        return await ClienteModel.findByIdAndUpdate(id, dados, { new: true });
    }
}
module.exports = new ClienteDAO();