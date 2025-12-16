const connectToDatabase = require('../database/db');
const PacoteModel = require('../models/Pacote'); // <--- Sem { }

class PacoteDAO {
    async create(pacoteData) {
        await connectToDatabase();
        // Se PacoteModel for undefined, aqui dá erro 500
        return await PacoteModel.create(pacoteData); 
    }

    async findAll() {
        await connectToDatabase();
        return await PacoteModel.find({});
    }

    async delete(id) {
        await connectToDatabase();
        const result = await PacoteModel.findByIdAndDelete(id);
        return !!result;
    }

    async update(id, dados) {
        await connectToDatabase();
        return await PacoteModel.findByIdAndUpdate(id, dados, { new: true });
    }
}
module.exports = new PacoteDAO();