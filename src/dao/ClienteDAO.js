const db = require('../database/db');

class ClienteDAO {
    create(cliente) {
        db.clientes.push(cliente);
        return cliente;
    }

    findAll() {
        return db.clientes;
    }

    findByEmail(email) {
        return db.clientes.find(c => c.email === email);
    }
    
    findById(id) {
        return db.clientes.find(c => c.id === id);
    }
}
module.exports = new ClienteDAO();