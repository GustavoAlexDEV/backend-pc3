const { v4: uuidv4 } = require('uuid');

class Cliente {
    constructor(nome, email, telefone) {
        this.id = uuidv4();
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
module.exports = Cliente;