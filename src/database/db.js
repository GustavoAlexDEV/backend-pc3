const mongoose = require('mongoose');

let isConnected = false; 

const connectToDatabase = async () => {
    if (isConnected) {
        console.log('=> Usando conexão de banco existente');
        return;
    }

    console.log('=> Criando nova conexão com o banco...');
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('=> MongoDB Conectado!');
    } catch (error) {
        console.error('Erro ao conectar no MongoDB:', error);
        throw error; 
    }
};

module.exports = connectToDatabase;