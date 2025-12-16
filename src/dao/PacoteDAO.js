const connectToDatabase = require('../database/db');
const PacoteModel = require('../models/Pacote'); 

class PacoteDAO {
    async create(pacoteData) {
        await connectToDatabase();
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