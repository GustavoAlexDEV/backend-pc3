const db = require('../database/db');

class PacoteDAO {
    create(pacote) {
        db.pacotes.push(pacote);
        return pacote;
    }

    findAll() {
        return db.pacotes;
    }

    findById(id) {
        return db.pacotes.find(p => p.id === id);
    }
}
module.exports = new PacoteDAO();